import type { Metadata } from "next";
import ServicesView from "./services-view";

export const metadata: Metadata = {
    title: "Servicios",
    description:
        "Soporte técnico de software y desarrollo web: sitios Next.js, e-commerce, optimización de velocidad y SEO, automatizaciones y diseño UI/UX.",
    alternates: {
        canonical: "/services",
    },
};

export default function ServicesPage() {
    return <ServicesView />;
}
