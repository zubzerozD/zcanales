"use client";
import { motion } from "framer-motion";

type SkillCategory = {
    name: string;
    icon: string;
    skills: string[];
};

const categories: SkillCategory[] = [
    {
        name: "Frontend",
        icon: "🎨",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        name: "Backend",
        icon: "⚙️",
        skills: ["Node.js", "Firebase", "PostgreSQL", "Redis", "REST APIs"],
    },
    {
        name: "Herramientas",
        icon: "🛠️",
        skills: ["Git", "GitHub", "Docker", "Linux", "VS Code"],
    },
    {
        name: "Diseño & Otros",
        icon: "✨",
        skills: ["Figma", "UI/UX", "SEO", "IA/ML", "Automatización"],
    },
];

export const Skills = () => {
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
                    Skills
                </h2>
                <p className="mt-4 text-lg text-zinc-400">
                    Tecnologías y herramientas que domino
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
                    >
                        <div className="text-3xl mb-4">{category.icon}</div>
                        <h3 className="text-lg font-bold text-zinc-100 font-display mb-4">
                            {category.name}
                        </h3>
                        <ul className="space-y-2">
                            {category.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="text-sm text-zinc-400 flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
