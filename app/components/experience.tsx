"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

type Experience = {
    role: string;
    company: string;
    period: string;
    description: string;
    tags?: string[];
};

const experiences: Experience[] = [
    {
        role: "Desarrollador Full-Stack & Soporte Técnico",
        company: "Freelance",
        period: "2023 - Presente",
        description:
            "Desarrollo de aplicaciones web modernas con Next.js y React. Soporte técnico especializado en sistemas, redes y mantenimiento de equipos. Automatización de procesos con IA.",
        tags: ["Next.js", "React", "TypeScript", "Node.js", "IA"],
    },
    {
        role: "Ingeniero en Informática",
        company: "QuanThia",
        period: "2025 - Presente",
        description:
            "Fundador y desarrollador principal. Arquitectura de software corporativo, e-commerce empresarial y automatización con IA para PyMEs en Chile.",
        tags: ["Next.js", "TypeScript", "Firebase", "AI"],
    },
];

export const Experience = () => {
    return (
        <section className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
                    Experiencia
                </h2>
                <p className="mt-4 text-lg text-zinc-400">
                    Mi trayectoria profesional
                </p>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
                {/* Línea vertical */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-600 to-transparent" />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.role}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`relative mb-12 pl-8 md:pl-0 ${
                            index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                        }`}
                    >
                        {/* Dot */}
                        <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-zinc-100 rounded-full -translate-x-1.5 md:-translate-x-1.5 shadow-lg shadow-zinc-100/20" />

                        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                                <Calendar size={14} />
                                {exp.period}
                            </div>
                            <h3 className="text-xl font-bold text-zinc-100 font-display">
                                {exp.role}
                            </h3>
                            <p className="text-zinc-400 text-sm mt-1">{exp.company}</p>
                            <p className="text-zinc-300 mt-3 text-sm leading-relaxed">
                                {exp.description}
                            </p>
                            {exp.tags && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {exp.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
