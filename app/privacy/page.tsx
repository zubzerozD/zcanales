import type { Metadata } from "next";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
    title: "Política de Privacidad",
    description:
        "Política de privacidad del sitio de Sebastián Canales: qué datos se recogen en el formulario de contacto, cómo se usan y con qué tecnologías se procesan.",
    alternates: {
        canonical: "/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <div className="bg-zinc-900 min-h-screen pt-24 px-6">
            <div className="max-w-2xl mx-auto prose prose-invert prose-zinc">
                <h1>Política de Privacidad</h1>
                <p>Última actualización: {new Date().toLocaleDateString()}</p>

                <h3>1. Datos que recolectamos</h3>
                <p>Recopilamos información básica cuando utilizas nuestro formulario de contacto (Nombre, Email) y datos técnicos de navegación (IP anonimizada) para fines estadísticos.</p>

                <h3>2. Uso de la información</h3>
                <p>Utilizamos tu email exclusivamente para responder a tus consultas sobre nuestros servicios. No compartimos tu información con terceros para marketing.</p>

                <h3>3. Tecnologías</h3>
                <p>Este sitio utiliza tecnologías modernas como Vercel, Upstash y Resend para asegurar el funcionamiento y la entrega de correos.</p>
            </div>
        </div>
    );
}