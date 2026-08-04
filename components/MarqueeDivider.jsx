"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ITEMS = [
  "DEVELOPMENT",
  "UI/UX DESIGN",
  "FRONTEND",
  "BACKEND",
  "CREATIVE CODE",
];

function Track() {
  return (
    // aria-hidden on the duplicate is handled by the parent; this is purely visual.
    <div className="flex shrink-0 items-center whitespace-nowrap">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="mx-8 text-xl font-black uppercase tracking-[0.15em] sm:text-2xl">
            {item}
          </span>
          <span className="mx-4 text-brand">✦</span>
        </span>
      ))}
    </div>
  );
}

/**
 * Seamless infinite marquee: two identical tracks translate -50% of the wrapper
 * width, so the loop restarts exactly where it began. Slows down on hover.
 */
export default function MarqueeDivider({ speed = 26, reverse = false }) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="relative overflow-hidden border-y-2 border-ink bg-ink py-4 text-paper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Services ticker"
    >
      <motion.div
        className="flex w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: paused ? speed * 3 : speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Track />
        <Track />
      </motion.div>
    </div>
  );
}
