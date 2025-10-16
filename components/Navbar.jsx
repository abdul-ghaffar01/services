"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const links = [
        { name: "Home", href: "#home", },
        { name: "Web Development", href: "#web-development", },
        { name: "Deployment", href: "#deployment" },
        { name: "Tech Stack", href: "#tech-stack" },
        { name: "Contact", href: "#contact" },
    ]
    // Change style when scrolling
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "backdrop-blur-md bg-slate-900/70 border-b border-slate-700/50 shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* ====== Brand ====== */}
                <a
                    href="#"
                    className="text-2xl font-bold tracking-tight text-white hover:text-blue-400 transition"
                >
                    AG <span className="text-blue-400">S2</span> House
                </a>

                {/* ====== Desktop Links ====== */}
                <div className="hidden md:flex gap-8 text-gray-300 font-medium">
                    {links.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="hover:text-blue-400 transition"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* ====== Mobile Toggle ====== */}
                <button
                    className="md:hidden text-gray-300 hover:text-white transition"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* ====== Mobile Menu ====== */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50"
                    >
                        <div className="flex flex-col items-center py-4 space-y-4 text-gray-300">
                            {links.map(
                                (item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="hover:text-blue-400 transition text-lg"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
