"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Rocket } from "lucide-react";

export default function WebDevSection() {
    return (
        <section
            id="services"
            className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-gray-200 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6">
                {/* ====== LEFT: TEXT ====== */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex-1"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                        Web Development <br />
                        <span className="text-blue-400">That Defines Quality.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg">
                        I build lightning-fast, responsive, and SEO-optimized websites using
                        modern frameworks like <span className="text-blue-300">Next.js</span> and{" "}
                        <span className="text-blue-300">Tailwind CSS</span>.
                        Every project is crafted with performance, scalability, and
                        creativity in mind.
                    </p>

                    {/* Icons for tech vibe */}
                    <div className="flex gap-6 mb-8">
                        <div className="flex flex-col items-center">
                            <Layout className="text-blue-400 w-8 h-8 mb-2" />
                            <span className="text-sm text-gray-400">UI/UX Design</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Code2 className="text-blue-400 w-8 h-8 mb-2" />
                            <span className="text-sm text-gray-400">Fullstack Code</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Rocket className="text-blue-400 w-8 h-8 mb-2" />
                            <span className="text-sm text-gray-400">Performance</span>
                        </div>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
                        Start Your Project
                    </button>
                </motion.div>

                {/* ====== RIGHT: IMAGE / MOCKUP ====== */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative"
                >
                    {/* Glowing backdrop */}
                    <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] -z-10" />

                    {/* Placeholder mockup */}
                    <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex gap-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>
                            <span className="text-xs text-gray-500">index.jsx</span>
                        </div>

                        <pre className="text-sm text-gray-300 font-mono">
                            {`export default function Website() {
  return (
    <div className="text-center">
      <h1 className="text-3xl">
        Hello World 🌍
      </h1>
    </div>
  );
}`}
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
