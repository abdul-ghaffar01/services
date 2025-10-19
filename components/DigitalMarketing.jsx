"use client";

import { motion } from "framer-motion";
import { Megaphone, Globe, BarChart3, Users } from "lucide-react";

export default function DigitalMarketing3D() {
  const services = [
    {
      icon: <Megaphone className="w-10 h-10 text-indigo-400" />,
      title: "Social Media Marketing",
      desc: "Craft scroll-stopping content that builds reach, engagement, and loyal audiences across every platform.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-indigo-400" />,
      title: "SEO & Analytics",
      desc: "Rank higher, convert faster. We make sure your brand shines where your customers are searching.",
    },
    {
      icon: <Users className="w-10 h-10 text-indigo-400" />,
      title: "Brand Strategy",
      desc: "Define your voice, visuals, and vibe — every digital touchpoint that makes your brand unforgettable.",
    },
    {
      icon: <Globe className="w-10 h-10 text-indigo-400" />,
      title: "Ad Campaigns",
      desc: "Run high-performing ad campaigns that deliver measurable growth across Google, Meta, and more.",
    },
  ];

  return (
    <section id="digital-marketing" className="relative bg-gray-900 text-gray-100 py-24 overflow-hidden md:h-[100dvh] flex items-center">
      {/* ==== Animated 3D Glow Background ==== */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "100%", "0%"],
            y: ["0%", "50%", "0%"],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[700px] h-[700px] bg-gradient-to-br from-indigo-500/20 via-purple-500/30 to-blue-400/20 rounded-full blur-3xl -top-40 -left-40"
        />
        <motion.div
          animate={{
            x: ["100%", "0%", "100%"],
            y: ["0%", "40%", "0%"],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-purple-500/30 via-indigo-500/20 to-pink-500/20 rounded-full blur-3xl bottom-0 right-0"
        />
      </div>

      {/* ==== Section Content ==== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent mb-4"
        >
          Digital Marketing, Reimagined ⚡
        </motion.h2>

        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          We don’t just promote brands — we engineer digital ecosystems that drive conversions, visibility, and long-term trust.
        </p>

        {/* ==== Service Cards ==== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{
                rotateY: 8,
                rotateX: -4,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-[moveBorder_6s_linear_infinite]"
            >
              <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 h-full border border-gray-800/60 group-hover:border-indigo-400/60 transition-all duration-300 shadow-lg">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-100">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{color: "white"}}
          className="inline-block mt-16 px-10 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl shadow-lg hover:shadow-indigo-400/20 transition-all"
        >
          Contact for collaboration →
        </motion.a>
      </div>

      {/* ==== Animations ==== */}
      <style jsx>{`
        @keyframes moveBorder {
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
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
