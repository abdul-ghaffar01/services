"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(
      `👋 Hey Abdul Ghaffar! I'm ${name}.\n\n${message}`
    );
    window.open(`https://wa.me/923253069921?text=${encodedMessage}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-28 bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 text-gray-200 overflow-hidden md:h-[100dvh] flex items-center"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Let’s Build Something{" "}
            <span className="text-blue-400">Extraordinary</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
            Whether it’s{" "}
            <span className="text-blue-400">web development</span> or{" "}
            <span className="text-blue-400">server deployment</span>, I help
            bring your ideas to life with performance, reliability, and
            precision.
          </p>
          <div className="mx-auto md:mx-0 h-[2px] w-16 sm:w-20 bg-blue-500 mb-8" />
          <p className="text-gray-400 text-sm sm:text-base">
            Fill out the form to start a conversation — you’ll be redirected to
            WhatsApp instantly.
          </p>
        </motion.div>

        {/* Right side – form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-[0_0_25px_rgba(30,64,175,0.15)] flex flex-col gap-4 sm:gap-5"
        >
          <input
            type="text"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 rounded-lg bg-slate-800 text-gray-200 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm sm:text-base"
          />

          <textarea
            required
            rows="4"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-4 py-3 rounded-lg bg-slate-800 text-gray-200 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none text-sm sm:text-base"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all text-sm sm:text-base"
          >
            Send via WhatsApp
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
