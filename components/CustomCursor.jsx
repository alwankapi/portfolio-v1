"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Neo-brutalist cursor: a hard square that snaps to the pointer plus a lagging
 * dot that trails behind it. Disabled on touch/coarse pointers and when the
 * user prefers reduced motion.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default");
  const [visible, setVisible] = useState(false);

  const boxX = useMotionValue(-100);
  const boxY = useMotionValue(-100);
  const dotX = useSpring(boxX, { stiffness: 180, damping: 18, mass: 0.5 });
  const dotY = useSpring(boxY, { stiffness: 180, damping: 18, mass: 0.5 });

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const handleMove = (event) => {
      boxX.set(event.clientX);
      boxY.set(event.clientY);
      setVisible(true);

      const interactive = event.target.closest?.(
        'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]'
      );
      setVariant(interactive ? "hover" : "default");
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [boxX, boxY]);

  if (!enabled) return null;

  const isHover = variant === "hover";

  return (
    <>
      {/* Leading square */}
      <motion.div
        aria-hidden="true"
        style={{ x: boxX, y: boxY }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-3 -mt-3"
      >
        <motion.div
          animate={{
            width: isHover ? 44 : 24,
            height: isHover ? 44 : 24,
            marginLeft: isHover ? -10 : 0,
            marginTop: isHover ? -10 : 0,
            rotate: isHover ? 45 : 0,
            opacity: visible ? 1 : 0,
            backgroundColor: isHover ? "#D01B1B" : "transparent",
          }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="border-2 border-ink"
        />
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        aria-hidden="true"
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -ml-1 -mt-1"
      >
        <motion.div
          animate={{
            scale: isHover ? 0.4 : 1,
            opacity: visible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-2 w-2 bg-brand"
        />
      </motion.div>
    </>
  );
}
