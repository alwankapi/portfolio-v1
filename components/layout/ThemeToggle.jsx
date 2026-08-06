"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

/**
 * Brutalist theme switch with a quick 3D card-flip between sun and moon.
 */
export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      whileHover={{ y: -2, x: -2, boxShadow: "8px 8px 0 rgb(var(--ink))" }}
      whileTap={{ scale: 0.92, rotate: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`relative inline-flex h-11 w-11 items-center justify-center border-2 border-ink bg-surface text-ink shadow-brutal-md ${className}`}
      style={{ perspective: 400 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotateY: -90, opacity: 0, scale: 0.7 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1 }}
          exit={{ rotateY: 90, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-5 w-5" strokeWidth={2.5} />
          ) : (
            <Sun className="h-5 w-5" strokeWidth={2.5} />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
