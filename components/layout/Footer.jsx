"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative border-t-2 border-ink bg-ink px-4 py-10 font-bold text-paper sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex items-start justify-between gap-10">
          <p className="text-xs uppercase tracking-[0.15em] text-paper/40">
            © 2026 — Alwan Kapi Muntaha. All rights reserved.
          </p>

          <MagneticButton
            onClick={scrollToTop}
            aria-label="Scroll to top"
            strength={0.4}
            whileHover={{ y: -4, boxShadow: "5px 5px 0 rgb(var(--paper))" }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-paper bg-paper text-ink"
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.span>
          </MagneticButton>
        </div>
      </div>
    </motion.footer>
  );
}
