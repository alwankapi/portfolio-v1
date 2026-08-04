"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin brutalist progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[5px] w-full origin-left border-b-2 border-ink bg-brand"
    />
  );
}
