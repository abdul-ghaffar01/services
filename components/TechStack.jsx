"use client";

import { motion } from "framer-motion";
import {
    SiCplusplus,
    SiMongodb,
    SiMysql,
    SiNginx,
    SiNodedotjs,
    SiPython,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiNestjs,
    SiNextdotjs,
    SiRedux,
    SiAmazonaws,
    SiBootstrap,
    SiPostgresql,
    SiUbuntu,
    SiGit,
    SiReact,
    SiDocker,
    SiDjango,
} from "react-icons/si";

const techStack = [
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Nginx", icon: SiNginx, color: "#009639" },
    { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
];

export default function TechStackSection() {
    return (
        <section id="tech-stack" className="relative py-28 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:24px_24px] bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 text-gray-200 overflow-hidden">

            {/* Background glow */}
            <div className="absolute -z-10 inset-0">
                <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[180px] -translate-x-1/2"></div>
                <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-bold mb-6 text-white"
                >
                    My <span className="text-blue-400">Tech Stack</span>
                </motion.h2>

                <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                    The technologies powering my web development and deployment services.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-8 mt-10">

                    {techStack.map(({ name, icon: Icon, color }) =>
                        Icon ? (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="w-32 h-32 sm:w-36 sm:h-36 flex flex-col items-center justify-center bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                            >
                                <Icon
                                    size={42}
                                    style={{ color }}
                                    className="mb-3 group-hover:scale-110 transition-transform"
                                />
                                <p className="text-sm text-gray-300 group-hover:text-blue-400 font-medium">
                                    {name}
                                </p>
                            </motion.div>

                        ) : null
                    )}
                </div>
            </div>
        </section>
    );
}
