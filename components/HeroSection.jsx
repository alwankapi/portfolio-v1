"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="grid-paper relative min-h-screen snap-start overflow-hidden bg-[#f7f7f2] px-6 py-8 text-[#0a0a0a] sm:px-10 lg:px-16"
    >
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 24, -16, 0],
          y: [0, -18, 18, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="hero-splash absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between">
        <header className="flex items-start justify-between pt-2">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-full border-2 border-[#0a0a0a] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.25em] shadow-[5px_5px_0_#0a0a0a]"
          >
            Alwan Kapi Muntaha
          </motion.div>
        </header>

        <div className="py-24 sm:py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute -left-3 top-5 h-20 w-20 border-2 border-[#0a0a0a] bg-white shadow-[8px_8px_0_#0a0a0a] sm:h-28 sm:w-28"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-4 right-0 hidden h-32 w-48 border-2 border-[#0a0a0a] bg-[#0a0a0a] lg:block"
            />

            <h1 className="relative max-w-6xl text-[clamp(4.3rem,14vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.1em] text-[#0a0a0a]">
              PORT
              <br />
              FOLIO<span className="tracking-[-0.15em]">.</span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "min(100%, 760px)" }}
              transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 h-3 bg-[#0a0a0a] sm:h-4"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="grid gap-5 border-t-2 border-[#0a0a0a] py-6 md:grid-cols-[1fr_auto_1fr]"
        >
          <p className="max-w-sm text-sm font-bold uppercase tracking-[0.18em] text-[#4b4b4b]">
            Web Developer | Program Analyst | UI/UX Designer
          </p>

          <a
            href="#about"
            className="group inline-flex items-center gap-3 justify-self-start rounded-full border-2 border-[#0a0a0a] bg-[#0a0a0a] px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0a0a0a] hover:shadow-[7px_7px_0_#0a0a0a] md:justify-self-center"
          >
            Explore
            <ArrowDownRight className="h-4 w-4 transition duration-300 group-hover:rotate-45" />
          </a>

          <p className="max-w-sm text-left text-sm leading-6 text-[#5f5f5f] md:justify-self-end md:text-right">
            Clean digital experiences, sharp interfaces, and practical systems with strong visual structure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}