"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative border-t-2 border-[#0a0a0a] bg-[#0a0a0a] px-6 py-12 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#a0a0a0]">
              Alwan Kapi Muntaha
            </p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-[#c0c0c0]">
              Web Developer & UI/UX Designer crafting clean digital experiences.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-4 text-[0.6rem] font-black uppercase tracking-[0.32em] text-[#a0a0a0]">
              Navigate
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-black uppercase tracking-[0.12em] text-white transition duration-300 hover:text-[#a0a0a0]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="inline-flex h-12 w-12 items-center justify-center border-2 border-white bg-white text-[#0a0a0a] transition duration-300 hover:-translate-y-1 hover:bg-[#0a0a0a] hover:text-white hover:shadow-[5px_5px_0_white]"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 border-t-2 border-[#2a2a2a] pt-6 text-center">
          <p className="text-xs font-semibold tracking-[0.12em] text-[#6a6a6a]">
            &copy; {new Date().getFullYear()} Alwan Kapi Muntaha. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}