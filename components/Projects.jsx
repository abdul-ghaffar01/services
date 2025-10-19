"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Portfolio",
    description: "Personal site built with Next.js and Tailwind.",
    image: '/project-images/portfolio.png',
    link: "https://iabdulghaffar.com",
  }, {
    name: "Maqsood-dev",
    description: "Deployed a developer portfolio website.",
    image: '/project-images/maqsood-dev.png',
    link: "https://www.maqsood-dev.online/",
  },
  {
    name: "Blogs",
    description: "A blog website that features dynamic content.",
    image: '/project-images/blogs.png',
    link: "https://blogs.iabdulghaffar.com",
  },
  {
    name: "Chatbot",
    description: "AI-powered chatbot for instant support.",
    image: '/project-images/chatbot.png',
    link: "https://chat.iabdulghaffar.com",
  },
];

export default function DeployedProjectsMarquee() {
  const repeated = [...projects, ...projects];
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrame;
    const loop = () => {
      if (!isPaused && containerRef.current) {
        // move left by 0.5px per frame (adjust speed)
        x.set(x.get() - 0.5);
        const width = containerRef.current.scrollWidth / 2;
        if (Math.abs(x.get()) >= width) {
          x.set(0);
        }
      }
      animationFrame = requestAnimationFrame(loop);
    };
    animationFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, x]);

  return (
    <section
      id="projects"
      className="relative py-28 bg-gradient-to-b from-[#0b1120] via-[#0f172a] to-[#10192f] text-gray-100 overflow-hidden md:h-[100dvh] flex items-center flex-col"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Deployed Projects
        </h2>
        <p className="mt-3 text-gray-400 text-sm md:text-base">
          Explore some of the live applications I’ve deployed and optimized.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div style={{ x }} className="flex gap-8">
          {repeated.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[300px] md:min-w-[400px] flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-500"
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={200}
                  className="object-cover w-full h-full opacity-80 hover:opacity-100 transition"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-blue-400 mb-1">
                  {p.name}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {p.description}
                </p>
                <div className="mt-3 flex justify-end text-blue-400">
                  <ExternalLink size={16} />
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
