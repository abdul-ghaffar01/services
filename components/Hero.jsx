"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      {/* ====== Background Image ====== */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero_img.png" // add this image in /public
          alt="AG S2 House background"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-950/30" />
      </div>

      {/* ====== Content ====== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center max-w-3xl px-6"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Build. Deploy. <span className="text-blue-400">Scale.</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Welcome to <span className="font-semibold text-blue-300">AG S2 House</span> —  
          crafting high-performance web applications and scalable server deployments for modern businesses.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold shadow-lg transition">
            Get a Quote
          </button>
          <button className="border border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition">
            Explore Services
          </button>
        </motion.div>
      </motion.div>

      {/* ====== Subtle Glow Orbs ====== */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[160px] -z-10" />
    </section>
  );
}
