"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * Pulls the element toward the cursor while it hovers, then springs back.
 * Renders as whatever tag you pass via `as` (button, a, div...).
 */
export default function MagneticButton({
  children,
  as = "button",
  strength = 0.35,
  radius = 1,
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const springCfg = { stiffness: 260, damping: 18, mass: 0.5 };
  const x = useSpring(useMotionValue(0), springCfg);
  const y = useSpring(useMotionValue(0), springCfg);

  const MotionTag = motion[as] ?? motion.button;

  const handleMouseMove = (event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * strength * radius);
    y.set(offsetY * strength * radius);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onBlur={reset}
      style={{ x, y }}
      whileTap={{ scale: 0.96 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
