"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

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
      className="relative border-t-2 border-[#0a0a0a] bg-[#0a0a0a] px-4 py-10 text-white sm:px-8 font-bold"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex items-start justify-between gap-10">
          <div>
            <p className="text-xs text-white/40 tracking-[0.15em] uppercase">
              © 2026 — Alwan Kapi Muntaha. All rights reserved.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="inline-flex h-12 w-12 items-center justify-center border-2 border-white bg-white text-[#0a0a0a] transition duration-300 hover:-translate-y-1 hover:bg-[#0a0a0a] hover:text-white hover:shadow-[5px_5px_0_white]"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.footer>
  );
}