"use client";
import { Github, Mail, Twitter, Send, Instagram } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import { useState } from "react";
import { motion } from "framer-motion";

const socials = [
    {
        icon: <Instagram size={20} />,
        href: "https://instagram.com/zubzerozd",
        label: "Instagram",
        handle: "@zubzerozd",
    },
    {
        icon: <Mail size={20} />,
        href: "mailto:zubzerozd.dev@gmail.com", // Recuerda actualizar esto con tu correo real si lo deseas
        label: "Email",
        handle: "zubzerozd.dev@gmail.com",
    },
    {
        icon: <Github size={20} />,
        href: "https://github.com/zubzerozd",
        label: "Github",
        handle: "zubzerozd",
    },
];

// Variantes para la animación escalonada
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
            {/* La navegación ya está en layout.tsx */}

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto pt-24 pb-16"
            >

                {/* Sección de Redes Sociales */}
                <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-16 mb-16">
                    {socials.map((s) => (
                        <motion.div key={s.label} variants={item} className="w-full">
                            <Card>
                                <Link
                                    href={s.href}
                                    target="_blank"
                                    className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
                                >
                                    <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" aria-hidden="true" />
                                    <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                        {s.icon}
                                    </span>
                                    <div className="z-10 flex flex-col items-center">
                                        <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                            {s.handle}
                                        </span>
                                        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                            {s.label}
                                        </span>
                                    </div>
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Formulario de Contacto */}
                <motion.div variants={item} className="w-full max-w-2xl mx-auto">
                    <Card>
                        <div className="p-8 md:p-12 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 font-display sm:text-4xl mb-8 text-center">
                                    Envíame un mensaje
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Nombre</label>
                                            <input type="text" name="name" id="name" required className="w-full rounded-md border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-colors" placeholder="Tu nombre" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                                            <input type="email" name="email" id="email" required className="w-full rounded-md border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-colors" placeholder="tu@correo.com" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Mensaje</label>
                                        <textarea name="message" id="message" required rows={4} className="w-full rounded-md border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-colors resize-none" placeholder="¿En qué puedo ayudarte?" />
                                    </div>

                                    <div className="flex flex-col items-center gap-4">
                                        <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                            {loading ? "Enviando..." : <>Enviar mensaje <Send size={18} /></>}
                                        </button>

                                        {status === "success" && (
                                            <p className="text-green-400 text-sm animate-fade-in">¡Mensaje enviado con éxito!</p>
                                        )}
                                        {status === "error" && (
                                            <p className="text-red-400 text-sm animate-fade-in">Hubo un error al enviar el mensaje.</p>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Card>
                </motion.div>

            </motion.div>
        </div>
    );
}