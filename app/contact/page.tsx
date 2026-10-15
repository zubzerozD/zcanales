import type { Metadata } from "next";
import ContactView from "./contact-view";

export const metadata: Metadata = {
    title: "Contacto",
    description:
        "Contacta a Sebastián Canales para soporte técnico o desarrollo web con Next.js, TypeScript y React. Formulario de contacto y redes sociales.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return <ContactView />;
}
