"use client";
import React from "react";
import { Card } from "../components/card";
import {
    AppWindow, // Para Software/Windows
    Wrench, // Para Mantenimiento físico/técnico
    GraduationCap, // Para Educación/Datos (Servicios especiales)
    Globe, // Para Desarrollo Web
    ShoppingCart, // Para E-Commerce
    Bot, // Para Automatización
    Check, // Para Verificación/Calidad
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
    // --- SECCIÓN SOPORTE TÉCNICO (DIVIDIDA) ---
    {
        title: "Software & Sistema",
        description: "Soluciones rápidas para problemas de Windows, programas y drivers. Todo lo que tu sistema necesita para correr suave.",
        icon: <AppWindow size={32} />,
        items: [
            "Activación Windows y Office 365 (Remoto/Presencial)",
            "Reparación de registros y archivos del sistema",
            "Resolución de Pantallazos Azules (BSOD)",
            "Actualización y corrección de Drivers",
            "Instalación de programas esenciales",
            "Configuración de Antivirus y Control Parental",
        ],
    },
    {
        title: "Mantenimiento & Potencia",
        description: "Limpieza profunda y optimización para que tu equipo vuele. Ideal para gamers o PCs lentos.",
        icon: <Wrench size={32} />,
        items: [
            "Formateo e instalación limpia (Presencial)",
            "Limpieza de software y optimización",
            "Optimización dedicada para Juegos (Gaming)",
            "Diagnóstico completo de hardware",
            "Corrección de errores en disco",
            "Restauración de Windows sin perder archivos",
        ],
    },
    {
        title: "Servicios Especiales",
        description: "Soluciones avanzadas para situaciones críticas y educación digital personalizada.",
        icon: <GraduationCap size={32} />,
        items: [
            "Recuperación de datos borrados",
            "Clases de uso de PC para adultos mayores",
            "Copias de seguridad y migración de datos",
            "Asesoría para compra o upgrade de equipos",
            "Soporte Remoto y Presencial en cercanías",
        ],
    },

    // --- SECCIÓN WEB (CONSOLIDADA) ---
    {
        title: "Desarrollo Web",
        description: "Tu presencia en internet con tecnología moderna. Sitios rápidos, bonitos y funcionales.",
        icon: <Globe size={32} />,
        items: [
            "Sitios informativos y Landing Pages",
            "Webs con Next.js (Alta velocidad y SEO)",
            "Portafolios y páginas personales",
            "Rediseño de sitios antiguos",
            "Correos corporativos (@tuempresa.cl)",
        ],
    },
    {
        title: "E-Commerce",
        description: "Empieza a vender online con una tienda segura y fácil de administrar.",
        icon: <ShoppingCart size={32} />,
        items: [
            "Tiendas Shopify y WooCommerce",
            "Carritos de compra a medida",
            "Catálogos digitales",
            "Integración de pagos (WebPay/MercadoPago)",
        ],
    },
    {
        title: "Automatización",
        description: "Ahorra tiempo conectando tus herramientas favoritas.",
        icon: <Bot size={32} />,
        items: [
            "Formularios inteligentes a Email/WhatsApp",
            "Integración con Google Analytics",
            "Chatbots básicos para atención",
            "Conexión con bases de datos",
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
                        Soluciones Tecnológicas
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-4 text-lg text-zinc-400"
                    >
                        Desde revivir tu computadora hasta lanzar tu negocio en internet.
                        Servicios profesionales adaptados a tus necesidades.
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