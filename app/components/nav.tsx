"use client";
import {
	ArrowLeft,
	ChevronDown,
	Github,
	Home,
	LayoutGrid,
	Mail,
	Instagram,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Lista de proyectos para el desplegable (Puedes agregar más)
const projectLinks = [
	{ title: "Todos los proyectos", href: "/projects" },
	{ title: "Planetfall", href: "/projects/planetfall" },
	{ title: "Highstorm", href: "/projects/highstorm" },
	{ title: "Unkey", href: "/projects/unkey" },
];

export const Navigation: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	// Detectar scroll para hacer la barra más compacta
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Cerrar dropdown al hacer clic fuera
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
			<header
				className={`
          relative flex items-center px-4 gap-2 border border-zinc-800 rounded-full shadow-2xl backdrop-blur-xl bg-zinc-900/50 
          transition-all duration-500 ease-in-out
          ${isScrolled ? "py-2" : "py-3"}
        `}
			>
				{/* Botón Home */}
				<NavItem href="/" active={pathname === "/"}>
					<Home size={20} />
				</NavItem>

				<div className="w-px h-6 bg-zinc-800 mx-1" />

				{/* Dropdown de Proyectos */}
				<div className="relative" ref={dropdownRef}>
					<button
						onClick={() => setDropdownOpen(!isDropdownOpen)}
						className={`
              flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200
              ${
								pathname.startsWith("/projects") || isDropdownOpen
									? "bg-zinc-800 text-zinc-100"
									: "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
							}
            `}
					>
						<LayoutGrid size={18} />
						<span>Proyectos</span>
						<ChevronDown
							size={14}
							className={`transition-transform duration-300 ${
								isDropdownOpen ? "rotate-180" : ""
							}`}
						/>
					</button>

					{/* Menú Desplegable Animado */}
					<AnimatePresence>
						{isDropdownOpen && (
							<motion.div
								initial={{ opacity: 0, y: 10, scale: 0.95 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: 10, scale: 0.95 }}
								transition={{ duration: 0.2 }}
								className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl overflow-hidden"
							>
								<div className="flex flex-col p-1">
									{projectLinks.map((link) => (
										<Link
											key={link.href}
											href={link.href}
											onClick={() => setDropdownOpen(false)}
											className="px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-xl transition-colors text-left"
										>
											{link.title}
										</Link>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				{/* Botón Contacto */}
				<NavItem href="/contact" active={pathname === "/contact"}>
					<Mail size={18} />
					<span className="hidden sm:inline">Contacto</span>
				</NavItem>

				{/* Redes Sociales (Iconos pequeños a la derecha) */}
				<div className="hidden sm:flex items-center gap-2 pl-2 border-l border-zinc-800 ml-2">
					<SocialLink href="https://github.com/zubzerozd">
						<Github size={20} />
					</SocialLink>
					<SocialLink href="https://instagram.com/zubzerozd">
						<Instagram size={20} />
					</SocialLink>
				</div>
			</header>
		</div>
	);
};

// Componente auxiliar para items simples
const NavItem = ({
	href,
	children,
	active,
}: { href: string; children: React.ReactNode; active?: boolean }) => (
	<Link
		href={href}
		className={`
      flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-full transition-all duration-200
      ${
				active
					? "bg-zinc-100 text-zinc-900 shadow-md"
					: "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
			}
    `}
	>
		{children}
	</Link>
);

// Componente auxiliar para redes sociales
const SocialLink = ({
	href,
	children,
}: { href: string; children: React.ReactNode }) => (
	<Link
		href={href}
		target="_blank"
		className="p-2 text-zinc-500 hover:text-zinc-100 transition-colors"
	>
		{children}
	</Link>
);