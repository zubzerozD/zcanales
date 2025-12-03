"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "../components/card";
import { Article } from "./article";
import type { Project } from "@/.velite";

interface ProjectsViewProps {
    projects: Project[]; // Ahora recibimos un solo array
    views: Record<string, number>;
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export const ProjectsView: React.FC<ProjectsViewProps> = ({
    projects,
    views,
}) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32"
        >
            <motion.div variants={item} className="max-w-2xl mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
                    Proyectos
                </h2>
                <p className="mt-4 text-zinc-400">
                    Una cronología de mis trabajos y experimentos.
                </p>
            </motion.div>

            <motion.div variants={item} className="w-full h-px bg-zinc-800" />

            {/* Grid unificado para todos los proyectos */}
            <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <motion.div key={project.slug} variants={item}>
                        <Card>
                            <Article project={project} views={views[project.slugAsParams] ?? 0} />
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};