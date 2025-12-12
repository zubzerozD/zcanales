"use client";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full border-t border-zinc-800 bg-zinc-900 pt-10 pb-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Copyright */}
                <div className="text-zinc-500 text-sm text-center md:text-left">
                    <p>
                        &copy; {new Date().getFullYear()} <span className="text-zinc-200">zubzerozd</span>
                    </p>
                    <p className="mt-1 text-xs">
                        Todos los derechos reservados.
                    </p>
                </div>

                {/* Enlaces Legales */}
                <div className="flex gap-6 text-sm font-medium">
                    <Link
                        href="/privacy"
                        className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                    >
                        Privacidad
                    </Link>
                    <Link
                        href="/terms"
                        className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                    >
                        Términos
                    </Link>
                </div>
            </div>
        </footer>
    );
};