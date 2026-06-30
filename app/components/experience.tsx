"use client";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Briefcase, Award } from "lucide-react";

type Experience = {
    role: string;
    company: string;
    period: string;
    description: string;
    tags?: string[];
    type: "work" | "education" | "certification";
};

const experiences: Experience[] = [
    {
        role: "Ingeniero en Informática & Fundador",
        company: "QuanThia",
        period: "2025 - Presente",
        description:
            "Fundador y desarrollador principal. Arquitectura de software corporativo, e-commerce empresarial y automatización con IA para PyMEs en Chile.",
        tags: ["Next.js", "TypeScript", "Firebase", "AI"],
        type: "work",
    },
    {
        role: "Desarrollador Full-Stack & Soporte Técnico",
        company: "Freelance",
        period: "2023 - Presente",
        description:
            "Desarrollo de aplicaciones web modernas con Next.js y React. Soporte técnico especializado en sistemas, redes y mantenimiento de equipos. Automatización de procesos con IA.",
        tags: ["Next.js", "React", "TypeScript", "Node.js"],
        type: "work",
    },
    {
        role: "Ingeniero de Software C++",
        company: "VRIP UBB (Lab. Automatización)",
        period: "Mar 2023 - Dic 2023",
        description:
            "Desarrollé algoritmos en C++ que permitieron automatizar el reconocimiento de objetos con una precisión del 95% en entornos controlados. Optimicé la lógica de control del brazo robótico, logrando una reducción del 25% en los tiempos de ejecución. Diseñé la interfaz de comunicación robot-PC con 0% de pérdida de paquetes críticos.",
        tags: ["C++", "Visual Studio Code", "Automatización", "Robótica"],
        type: "work",
    },
    {
        role: "Administrador de Sistemas & Bases de Datos",
        company: "M2Technic",
        period: "Ene 2022 - Feb 2023",
        description:
            "Administré la plataforma web de gestión de flotas con uptime del 99.9%. Ejecuté mantenimiento de bases de datos de geolocalización, reduciendo errores de inconsistencia GPS en un 20%. Documenté procesos de soporte técnico, disminuyendo tiempo de resolución en un 30%.",
        tags: ["SQL", "Sistemas", "Soporte Técnico", "Bases de Datos"],
        type: "work",
    },
    {
        role: "Ingeniero Civil en Informática",
        company: "Universidad del Bío-Bío",
        period: "2019 - 2024",
        description: "Licenciado en Ciencias de la Ingeniería (2024). Ingeniero Civil en Informática (2024).",
        type: "education",
    },
    {
        role: "Técnico en Administración y Recursos Humanos",
        company: "Colegio HVL",
        period: "2017 - 2018",
        description: "Formación técnica en administración y gestión de recursos humanos.",
        type: "education",
    },
    {
        role: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL",
        company: "Udemy",
        period: "2025",
        description: "Curso completo de desarrollo web frontend y backend.",
        tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
        type: "certification",
    },
    {
        role: "Experiencia de Usuario (UX) Avanzado",
        company: "LinkedIn",
        period: "2026",
        description: "Certificación en diseño de experiencia de usuario avanzado.",
        tags: ["UX", "UI", "Diseño"],
        type: "certification",
    },
];

export const Experience = () => {
    const workExp = experiences.filter((e) => e.type === "work");
    const eduExp = experiences.filter((e) => e.type === "education");
    const certExp = experiences.filter((e) => e.type === "certification");

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
                    Mi trayectoria profesional y académica
                </p>
            </motion.div>

            {/* Trabajo */}
            <div className="max-w-3xl mx-auto mb-16">
                <div className="flex items-center gap-2 mb-6">
                    <Briefcase size={20} className="text-zinc-400" />
                    <h3 className="text-lg font-bold text-zinc-100 font-display">Experiencia Laboral</h3>
                </div>
                <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-600 to-transparent" />
                    {workExp.map((exp, index) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative mb-8 pl-12"
                        >
                            <div className="absolute left-4 top-6 w-3 h-3 bg-zinc-100 rounded-full -translate-x-1.5 shadow-lg shadow-zinc-100/20" />
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                                    <Calendar size={14} />
                                    {exp.period}
                                </div>
                                <h4 className="text-lg font-bold text-zinc-100 font-display">
                                    {exp.role}
                                </h4>
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
            </div>

            {/* Educación */}
            <div className="max-w-3xl mx-auto mb-16">
                <div className="flex items-center gap-2 mb-6">
                    <GraduationCap size={20} className="text-zinc-400" />
                    <h3 className="text-lg font-bold text-zinc-100 font-display">Educación</h3>
                </div>
                <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-600 to-transparent" />
                    {eduExp.map((exp, index) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative mb-8 pl-12"
                        >
                            <div className="absolute left-4 top-6 w-3 h-3 bg-zinc-100 rounded-full -translate-x-1.5 shadow-lg shadow-zinc-100/20" />
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                                    <Calendar size={14} />
                                    {exp.period}
                                </div>
                                <h4 className="text-lg font-bold text-zinc-100 font-display">
                                    {exp.role}
                                </h4>
                                <p className="text-zinc-400 text-sm mt-1">{exp.company}</p>
                                <p className="text-zinc-300 mt-3 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificaciones */}
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-2 mb-6">
                    <Award size={20} className="text-zinc-400" />
                    <h3 className="text-lg font-bold text-zinc-100 font-display">Certificaciones</h3>
                </div>
                <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-600 to-transparent" />
                    {certExp.map((exp, index) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative mb-8 pl-12"
                        >
                            <div className="absolute left-4 top-6 w-3 h-3 bg-zinc-100 rounded-full -translate-x-1.5 shadow-lg shadow-zinc-100/20" />
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                                    <Calendar size={14} />
                                    {exp.period}
                                </div>
                                <h4 className="text-lg font-bold text-zinc-100 font-display">
                                    {exp.role}
                                </h4>
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
            </div>
        </section>
    );
};
