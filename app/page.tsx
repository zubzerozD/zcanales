"use client";
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">

      {/* Línea divisoria superior animada */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
      />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Título Principal con efecto de escala y fade */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, letterSpacing: "-0.05em" }}
        animate={{ opacity: 1, scale: 1, letterSpacing: "0em" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="py-3.5 px-0.5 z-10 text-4xl text-transparent bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
      >
        zubzerozD
      </motion.h1>

      {/* Línea divisoria inferior animada */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
      />

      {/* Texto descriptivo con aparición suave hacia arriba */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="my-16 text-center"
      >
        <h2 className="text-sm text-zinc-500 ">
          Soluciones digitales y soporte técnico especializado.{" "}
          <Link
            target="_blank"
            href="/services"
            className="underline duration-500 hover:text-zinc-300"
          >
            Ver servicios
          </Link>
        </h2>
      </motion.div>
    </div>
  );
}