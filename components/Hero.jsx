"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
    >
      {/* ====== Animated Gradient Background ====== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 animate-gradient" />

      {/* ====== Overlay (for depth and readability) ====== */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* ====== Hero Content ====== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center max-w-3xl px-6"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Build. 
          <span className="text-blue-400"> Deploy</span>
          . Scale
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Welcome to{" "}
          <span className="font-semibold text-blue-300">AG S2 House</span> —
          crafting modern, high-performance web applications and scalable server solutions for the digital age.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              style={{ color: "white" }}
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden 
               rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold 
               shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />
              <span className="relative z-10">Get Connected</span>
            </Link>

            <Link
              style={{ color: "white" }}
              href="#web-development"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden 
               rounded-xl border border-blue-400/60 text-blue-300 font-semibold 
               hover:text-white transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <span className="relative z-10">Explore Services</span>
            </Link>
          </div>


        </motion.div>
      </motion.div>

      {/* ====== Gradient Animation Style ====== */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }
          @keyframes moveGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
      `}</style>
    </section>
  );
}
