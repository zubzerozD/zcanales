"use client";
import React from "react";
import { Card } from "../components/card";
import {
    MonitorCog,
    Globe,
    ShoppingCart,
    Rocket,
    Palette,
    Bot,
    Check,
    Server,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Soporte Técnico & PC",
        description: "Mantenimiento, reparación y optimización de equipos. Recupera la velocidad y seguridad de tu ordenador.",
        icon: <MonitorCog size={32} />,
        items: [
            "Activaciones Windows/Office (Remoto/Presencial)",
            "Formateo e instalación limpia (Presencial)",
            "Diagnóstico y reparación de registros (Remoto)",
            "Resolución de pantallazos azules y errores",
            "Limpieza de virus y optimización gaming",
            "Recuperación de datos y archivos borrados",
            "Clases de uso de PC para adultos mayores",
        ],
    },
    {
        title: "Desarrollo Web Moderno",
        description: "Sitios web creados con Next.js y React. Tecnología de punta para destacar sobre la competencia.",
        icon: <Globe size={32} />,
        items: [
            "Sitios informativos y Landing Pages",
            "Portafolios y páginas 'Link en Bio'",
            "Webs autoadministrables para negocios",
            "Aplicaciones web estáticas (Súper rápidas)",
            "Desarrollo a medida con React/Next.js",
            "Migración de sitios antiguos a tecnologías modernas",
        ],
    },
    {
        title: "E-Commerce & Tiendas",
        description: "Vende tus productos online con una tienda profesional, segura y fácil de gestionar.",
        icon: <ShoppingCart size={32} />,
        items: [
            "Tiendas Shopify (Básicas y Pro)",
            "WooCommerce (WordPress)",
            "Desarrollo de carritos a medida (Custom)",
            "Catálogos digitales sin pasarela",
            "Integración de WebPay, MercadoPago y Flow",
        ],
    },
    {
        title: "Optimización Web",
        description: "Mejora la velocidad, seguridad y posición en Google de tu sitio web actual.",
        icon: <Rocket size={32} />,
        items: [
            "Optimización de velocidad de carga (Core Vitals)",
            "Auditoría y mejoras SEO para Google",
            "Limpieza de Malware en WordPress",
            "Actualización de plugins y seguridad",
            "Configuración de copias de seguridad",
        ],
    },
    {
        title: "Diseño & Branding",
        description: "Identidad visual que enamora. Diseño de interfaces modernas y experiencias de usuario memorables.",
        icon: <Palette size={32} />,
        items: [
            "Diseño UI/UX en Figma",
            "Prototipado interactivo",
            "Rediseño visual de webs antiguas",
            "Diseño de Logotipos y Banners",
            "Creación de Favicons y activos digitales",
        ],
    },
    {
        title: "Automatización & Cloud",
        description: "Conecta tus herramientas y automatiza procesos para ahorrar tiempo y dinero.",
        icon: <Server size={32} />,
        items: [
            "Correos corporativos (@tuempresa.cl)",
            "Configuración de Dominios y SSL (https)",
            "Formularios inteligentes a Email/Database",
            "Integración con WhatsApp Business",
            "Conexión con Google Analytics y Tag Manager",
        ],
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-900 to-black pb-20">
            <div className="container mx-auto px-6 pt-32 md:pt-40">

                {/* Encabezado */}
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl font-display"
                    >
                        Servicios Profesionales
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-4 text-lg text-zinc-400"
                    >
                        Desde soporte técnico especializado hasta desarrollo de software de alto nivel.
                        Soluciones tecnológicas adaptadas a tus necesidades.
                    </motion.p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-16" />

                {/* Grid de Servicios */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card>
                                <div className="p-6 h-full flex flex-col relative z-10">
                                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800/50 text-zinc-100 border border-zinc-700">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-zinc-100 mb-2 font-display">
                                        {service.title}
                                    </h3>

                                    <p className="text-zinc-400 text-sm mb-6 min-h-[40px]">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-3 mt-auto">
                                        {service.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                                                <Check size={16} className="text-zinc-100 mt-0.5 shrink-0" />
                                                <span className="leading-tight">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}