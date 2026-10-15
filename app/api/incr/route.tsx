import { NextRequest, NextResponse } from "next/server";
import { incrementView, isFirstView } from "@/util/views";

export const runtime = "edge";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const slug = body.slug;

    if (!slug) {
        return new NextResponse("Slug not found", { status: 400 });
    }

    // CORRECCIÓN: Obtenemos la IP desde los headers para evitar el error de tipo
    const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];

    if (ip) {
        const buf = await crypto.subtle.digest(
            "SHA-256",
            new TextEncoder().encode(ip),
        );
        const hash = Array.from(new Uint8Array(buf))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");

        // Deduplicación 24h por IP (SHA-256): false solo si ya fue contada.
        // Si Redis falla, isFirstView devuelve true y el incr falla silencioso.
        const isNew = await isFirstView(hash, slug);
        if (!isNew) {
            return new NextResponse(null, { status: 202 });
        }
    }
    await incrementView(slug);
    return new NextResponse(null, { status: 202 });
}