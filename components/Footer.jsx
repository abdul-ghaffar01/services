"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Web Development",
      href: "#web-development",
    },
    { name: "Deployment", href: "#deployment" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative bg-[#0b0d12] text-gray-300 border-t border-slate-800/50 py-12">
      {/* soft, professional glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h3 className="text-2xl font-semibold text-white tracking-tight">
            AG <span className="text-blue-400">S² House</span>
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Software & Server House by Abdul Ghaffar
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 text-sm"
        >
          {links.map(
            (item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            )
          )}
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4"
        >
          <a
            href="https://github.com/abdul-ghaffar01"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/abdul-ghaffar01"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:agscontact@example.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://wa.me/923253069921"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaWhatsapp size={20} />
          </a>
        </motion.div>
      </div>

      {/* Divider + Copyright */}
      <div className="relative z-10 mt-10 pt-6 border-t border-slate-800/50 text-center text-sm text-gray-500">
        © {year} Abdul Ghaffar — AG S² House. All rights reserved.
      </div>
    </footer>
  );
}
