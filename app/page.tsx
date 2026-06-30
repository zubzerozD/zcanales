"use client";
import React from "react";
import Particles from "./components/particles";
import { motion } from "framer-motion";
import { TextSphere } from "./components/text-sphere";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-black overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        {/* 1. Línea superior */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 mb-8"
        />

        {/* 2. Partículas (Fondo profundo) - z-index: -10 */}
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />

        {/* 3. ESFERA (Capa media) - z-index: 0 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center z-0 pointer-events-auto"
        >
          <div className="opacity-60 hover:opacity-100 transition-opacity duration-500">
            <TextSphere />
          </div>
        </motion.div>

        {/* 4. Título (Primer plano) - z-index: 10 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, letterSpacing: "-0.05em" }}
          animate={{ opacity: 1, scale: 1, letterSpacing: "0em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="py-1 px-0.5 z-10 text-4xl text-transparent bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
        >
          Sebastián Canales
        </motion.h1>

        {/* 5. Línea inferior */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 mt-8"
        />

        {/* 6. Texto descriptivo (Primer plano) - z-index: 20 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="my-16 text-center relative z-20"
        >
          <header className="relative flex items-center px-1 gap-2 border border-zinc-700 rounded-full shadow-2xl backdrop-blur-xl bg-zinc-900/50 
            transition-all duration-100 ease-in-out py-1">
          <h2 className="text-sm text-zinc-250 md:text-base w-full px-4 text-center">
            Soluciones digitales y soporte técnico especializado.{" "}
            <Link
              target="_blank"
              href="/services"
              className="underline duration-500 hover:text-zinc-300"
            >
              Ver servicios
            </Link>
          </h2>
          </header>
        </motion.div>
      </div>

      {/* Contenido adicional */}
      <div className="container mx-auto px-4">
        <About />
        <Experience />
        <Skills />
      </div>
    </div>
  );
}
