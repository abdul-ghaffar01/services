"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Network, Rocket } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DeploymentSection() {
    // ✅ Create random bubbles only after mount
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const arr = Array.from({ length: 12 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: Math.random() * 5,
            duration: 8 + Math.random() * 6,
        }));
        setBubbles(arr);
    }, []);

    return (
        <section
            id="deployment"
            className="relative py-28 bg-gradient-to-t from-slate-950 via-slate-900 to-indigo-950 text-gray-200 overflow-hidden md:h-[100dvh] flex items-center"
        >
            {/* ===== Dynamic Floating Bubbles ===== */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {bubbles.map((bubble, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-6 h-6 md:w-8 md:h-8 bg-blue-500/10 rounded-full blur-xl"
                        style={{ top: bubble.top, left: bubble.left }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: bubble.duration,
                            repeat: Infinity,
                            delay: bubble.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>


            {/* ===== Content Wrapper ===== */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-16 px-6">
                {/* ===== RIGHT: TEXT ===== */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex-1"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                        From Code to Cloud ☁️ <br />
                        <span className="text-blue-400">Deployment Simplified.</span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg">
                        I deploy full-stack applications using{" "}
                        <span className="text-blue-300">Docker</span>,{" "}
                        <span className="text-blue-300">Nginx</span>, and{" "}
                        <span className="text-blue-300">CI/CD pipelines</span> on reliable VPS servers.
                        Your site stays online, scalable, and blazing fast — all the time.
                    </p>

                    <div className="flex gap-8 mb-10 flex-wrap">
                        {[
                            { icon: Server, label: "Server Setup" },
                            { icon: Cloud, label: "Cloud Deploy" },
                            { icon: Network, label: "Networking" },
                            { icon: Rocket, label: "CI/CD" },
                        ].map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className="flex flex-col items-center text-center hover:scale-110 transition-transform"
                            >
                                <Icon className="text-blue-400 w-8 h-8 mb-2" />
                                <span className="text-sm text-gray-400">{label}</span>
                            </div>
                        ))}
                    </div>

                    <Link style={{color: "white"}} href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
                        Deploy With Me
                    </Link>
                </motion.div>

                {/* ===== LEFT: SERVER MOCKUP ===== */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative"
                >
                    {/* Glow effect */}
                    <div className="absolute -top-10 -right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] -z-10" />

                    {/* Floating Server Stack */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 shadow-2xl backdrop-blur-sm"
                    >
                        <div className="space-y-4">
                            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-4">
                                <p className="font-mono text-sm text-green-400">
                                    docker build -t myapp .
                                </p>
                            </div>
                            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-4">
                                <p className="font-mono text-sm text-blue-400">
                                    docker run -d -p 80:80 myapp
                                </p>
                            </div>
                            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-4">
                                <p className="font-mono text-sm text-gray-300">
                                    🚀 Deployed successfully to VPS!
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
