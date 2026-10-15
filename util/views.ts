// util/views.ts
import { Redis } from "@upstash/redis";

// Capa compartida de acceso al contador de visitas.
// Regla: NINGUNA función de este módulo lanza excepciones. Si Redis falla
// (base de datos borrada, timeout, rate limit, red), se registra un
// console.warn y se devuelve el valor por defecto para que la página
// nunca se tumbe.

let client: Redis | null = null;

function getClient(): Redis {
    // Cliente perezoso: si la config de entorno falta o es inválida,
    // Redis.fromEnv() lanza dentro del try/catch de cada función
    // en lugar de reventar al cargar el módulo.
    if (client === null) {
        client = Redis.fromEnv();
    }
    return client;
}

function pageviewKey(slug: string): string {
    return ["pageviews", "projects", slug].join(":");
}

// El catch es `unknown`: el mensaje puede no ser string (objeto, undefined, etc.)
function describeError(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }
    if (typeof error === "string") {
        return error;
    }
    try {
        const json = JSON.stringify(error);
        if (typeof json === "string") {
            return json;
        }
    } catch {
        // Estructuras circulares o BigInt: cae al fallback de abajo.
    }
    return String(error);
}

function warn(operation: string, error: unknown): void {
    console.warn(`[views] ${operation}: ${describeError(error)}`);
}

// Upstash puede devolver números, strings numéricos o null/undefined.
function toCount(value: unknown): number {
    if (typeof value === "number" && Number.isFinite(value)) {
        return value;
    }
    if (typeof value === "string" && value.trim() !== "") {
        const parsed = Number(value);
        if (Number.isFinite(parsed)) {
            return parsed;
        }
    }
    return 0;
}

// Lee las vistas de una lista de slugs. Devuelve siempre un Record completo
// con 0 como default; nunca lanza.
export async function getViews(
    slugs: readonly string[],
): Promise<Record<string, number>> {
    const views: Record<string, number> = {};
    for (const slug of slugs) {
        views[slug] = 0;
    }

    if (slugs.length === 0) {
        return views;
    }

    try {
        const values = await getClient().mget<unknown[]>(...slugs.map(pageviewKey));
        slugs.forEach((slug, index) => {
            views[slug] = toCount(values[index]);
        });
    } catch (error) {
        warn(`mget falló para ${slugs.length} slug(s)`, error);
    }

    return views;
}

// Lee la vista de un slug. Devuelve 0 como default; nunca lanza.
export async function getView(slug: string): Promise<number> {
    try {
        const value = await getClient().get<unknown>(pageviewKey(slug));
        return toCount(value);
    } catch (error) {
        warn(`get falló para "${slug}"`, error);
        return 0;
    }
}

// Incrementa la vista. Falla silenciosamente (console.warn) y devuelve
// false si no se pudo incrementar; nunca lanza.
export async function incrementView(slug: string): Promise<boolean> {
    try {
        await getClient().incr(pageviewKey(slug));
        return true;
    } catch (error) {
        warn(`incr falló para "${slug}"`, error);
        return false;
    }
}

// Deduplicación por IP en ventana de 24h (SET NX EX con hash SHA-256).
// Devuelve false SOLO cuando Redis confirma que la vista ya fue contada.
// Si Redis falla devuelve true (best effort) para que el llamador
// intente registrar la vista igualmente; nunca lanza.
export async function isFirstView(
    hash: string,
    slug: string,
    ttlSeconds: number = 24 * 60 * 60,
): Promise<boolean> {
    try {
        const result = await getClient().set(
            ["deduplicate", hash, slug].join(":"),
            true,
            { nx: true, ex: ttlSeconds },
        );
        return result !== null;
    } catch (error) {
        warn(`dedup set falló para "${slug}"`, error);
        return true;
    }
}
