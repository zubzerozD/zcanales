"use client";
import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const texts = [
    // Frontend
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "HTML5",
    "CSS3",
    "Framer Motion",
    "Vite",
    "Vue.js",
    
    // Backend
    "Node.js",
    "Python",
    "Kotlin",
    "Java",
    "C++",
    "PHP",
    "Go",
    
    // Databases
    "SQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Firebase",
    "Prisma",
    
    // DevOps & Tools
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "Vercel",
    "AWS",
    "Nginx",
    
    // Mobile & Desktop
    "React Native",
    "Flutter",
    "Android",
    
    // AI & ML
    "TensorFlow",
    "PyTorch",
    "OpenAI",
    
    // Design & Other
    "Figma",
    "REST API",
    "GraphQL",
    "WebSocket",
    "Velite",
    "ESLint",
    "NextAuth",
    "Zod",
];

export const TextSphere = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isLoaded = useRef(false);

    useEffect(() => {
        if (isLoaded.current) return;

        const container = containerRef.current;
        if (!container) return;

        const options = {
            radius: 250, // Radio de la esfera
            maxSpeed: "normal" as const, // Velocidad de rotación
            initSpeed: "normal" as const, // Velocidad inicial
            direction: 135, // Dirección inicial (grados)
            keep: true, // Mantener rotación al quitar el mouse
        };

        // Inicializar TagCloud
        TagCloud(container, texts, options);
        isLoaded.current = true;

        // Cleanup: Limpiar el contenedor si el componente se desmonta
        return () => {
            if (container) {
                container.innerHTML = "";
                isLoaded.current = false;
            }
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center py-10">
            <div
                ref={containerRef}
                className="text-zinc-400 font-medium cursor-pointer tracking-wide hover:text-zinc-100 transition-colors duration-300"
            />
            {/* Estilos específicos para los tags generados dinámicamente */}
            <style jsx global>{`
        .tagcloud {
            display: inline-block;
            font-family: var(--font-inter);
            font-size: 1rem;
            font-weight: 500;
        }
        .tagcloud--item {
          color: #a1a1aa; /* zinc-400 */
            text-transform: uppercase;
            transition: all 0.3s ease;
        }
        .tagcloud--item:hover {
          color: #ffffff; /* zinc-50 - blanco al pasar el mouse */
            font-size: 1.1rem;
            text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }
        `}</style>
        </div>
    );
};