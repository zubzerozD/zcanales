"use client";
import { motion } from "framer-motion";
import { MapPin, Code, Coffee, Zap } from "lucide-react";

export const About = () => {
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
                    Sobre mí
                </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
                {/* Lado izquierdo - Bio */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                        Soy Sebastián Canales, ingeniero en informática y desarrollador
                        full-stack apasionado por crear soluciones digitales que impactan.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                        Fundé QuanThia para ayudar a PyMEs chilenas a transformar sus
                        operaciones con tecnología de alto rendimiento. Me especializo en
                        arquitectura web moderna, automatización con IA y e-commerce
                        empresarial.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                        Cuando no estoy programando, estoy soporte técnico o explorando
                        nuevas tecnologías. Creo en el software que genera ROI, no en el
                        código por código.
                    </p>

                    <div className="flex items-center gap-4 mt-8 text-sm text-zinc-500">
                        <span className="flex items-center gap-1.5">
                            <MapPin size={14} /> Biobío, Chile
                        </span>
                    </div>
                </motion.div>

                {/* Lado derecho - Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 gap-4"
                >
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-700 transition-colors">
                        <Code size={24} className="mx-auto mb-3 text-zinc-400" />
                        <div className="text-2xl font-bold text-zinc-100 font-display">15+</div>
                        <div className="text-sm text-zinc-500">Proyectos</div>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-700 transition-colors">
                        <Zap size={24} className="mx-auto mb-3 text-zinc-400" />
                        <div className="text-2xl font-bold text-zinc-100 font-display">3+</div>
                        <div className="text-sm text-zinc-500">Años exp.</div>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-700 transition-colors">
                        <Coffee size={24} className="mx-auto mb-3 text-zinc-400" />
                        <div className="text-2xl font-bold text-zinc-100 font-display">∞</div>
                        <div className="text-sm text-zinc-500">Cafés</div>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-700 transition-colors">
                        <MapPin size={24} className="mx-auto mb-3 text-zinc-400" />
                        <div className="text-2xl font-bold text-zinc-100 font-display">CL</div>
                        <div className="text-sm text-zinc-500">Chile</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
