"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="fixed right-4 top-4 z-50 rounded-full border-2 border-[#0a0a0a] bg-white/80 px-2 py-2 shadow-[6px_6px_0_#0a0a0a] backdrop-blur-xl sm:right-8 sm:top-7 sm:px-3"
      aria-label="Primary navigation"
    >
      <ul className="flex items-center gap-1 text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#0a0a0a] sm:text-xs">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="rounded-full px-3 py-2 transition duration-300 hover:bg-[#0a0a0a] hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}