"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const directionOffset = {
  up: { y: 48, x: 0 },
  down: { y: -48, x: 0 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered fade/slide reveal. Wrap any block to animate it in once it
 * enters the viewport.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.75,
  amount = 0.25,
  once = true,
  className = "",
  as = "div",
  ...rest
}) {
  const offset = directionOffset[direction] ?? directionOffset.up;
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Parent that staggers its RevealItem children as the group scrolls into view.
 */
export function RevealGroup({
  children,
  stagger = 0.1,
  delayChildren = 0.05,
  amount = 0.2,
  once = true,
  className = "",
  ...rest
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  direction = "up",
  duration = 0.65,
  className = "",
  ...rest
}) {
  const offset = directionOffset[direction] ?? directionOffset.up;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, ease: EASE },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
