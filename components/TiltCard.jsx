"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * 3D tilt-on-hover container. Tracks the pointer inside the element and maps
 * its position to rotateX/rotateY, with a spring for a soft settle.
 */
export default function TiltCard({
  children,
  className = "",
  max = 10,
  scale = 1.02,
  glare = true,
  ...rest
}) {
  const ref = useRef(null);

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const springCfg = { stiffness: 220, damping: 20, mass: 0.6 };
  const rotateX = useSpring(
    useTransform(pointerY, [0, 1], [max, -max]),
    springCfg
  );
  const rotateY = useSpring(
    useTransform(pointerX, [0, 1], [-max, max]),
    springCfg
  );

  const glareX = useTransform(pointerX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(pointerY, [0, 1], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.35), transparent 55%)`;

  const handleMouseMove = (event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <div className={`tilt-scene ${className}`} {...rest}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="tilt-layer relative h-full"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden="true"
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </motion.div>
    </div>
  );
}
