"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Clock,
  Download,
  Mail,
  MapPin,
  Target,
} from "lucide-react";
import { useEffect, useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Hero side panel — an at-a-glance profile summary plus the two primary
 * calls to action (hire / download CV).
 */

const CV_URL = "/Alwan Kapi Muntaha-cv.pdf";

const FACTS = [
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Indonesia",
    note: "Remote friendly",
  },
  {
    icon: Briefcase,
    label: "Pengalaman",
    value: "2 Tahun",
    note: "4 proyek",
  },
  {
    icon: Target,
    label: "Fokus Saat Ini",
    value: "Fullstack Web",
    note: "Next.js · Laravel",
  },
];

/** Jakarta local time, refreshed every half minute. */
function useLocalTime() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Jakarta",
      }).format(new Date());

    setTime(format());
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.75 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroQuickFacts({ onNavigate }) {
  const localTime = useLocalTime();

  return (
    <motion.aside
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="lg:col-span-4"
      aria-label="Quick facts and contact actions"
    >
      <div className="border-2 border-ink bg-surface shadow-brutal-lg">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-ink px-4 py-2.5">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-paper sm:text-sm">
            Quick Facts
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-paper/70">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {localTime ? `${localTime} WIB` : "--:-- WIB"}
          </span>
        </div>

        {/* Facts list */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="divide-y-2 divide-ink"
        >
          {FACTS.map((fact) => (
            <motion.li
              key={fact.label}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 340, damping: 22 }}
              className="group flex items-center gap-3 px-4 py-3.5"
            >
              <span className="flex h-9 w-9 flex-none items-center justify-center border-2 border-ink bg-paper transition-colors duration-300 group-hover:bg-ink">
                <fact.icon
                  className="h-4 w-4 text-ink transition-colors duration-300 group-hover:text-paper"
                  aria-hidden="true"
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[0.58rem] font-bold uppercase tracking-[0.18em] text-muted">
                  {fact.label}
                </span>
                <span className="mt-0.5 block truncate text-sm font-black uppercase tracking-tight text-ink">
                  {fact.value}
                </span>
              </span>
              <span className="hidden flex-none font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted sm:block">
                {fact.note}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Availability strip */}
        <div className="flex items-center gap-2 border-y-2 border-ink bg-paper px-4 py-3">
          <span className="status-dot" aria-hidden="true" />
          <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted">
            Open — Full-time / Freelance
          </span>
        </div>

        {/* CTA */}
        <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2">
          <MagneticButton
            strength={0.25}
            onClick={() => onNavigate?.("contact")}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border-2 border-ink bg-ink px-4 py-3 text-[0.65rem] font-black uppercase tracking-[0.16em] text-paper"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-brand transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            />
            <Mail className="relative z-10 h-3.5 w-3.5" aria-hidden="true" />
            <span className="relative z-10">Hire Me</span>
          </MagneticButton>

          <MagneticButton
            as="a"
            href={CV_URL}
            download
            strength={0.25}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border-2 border-ink bg-surface px-4 py-3 text-[0.65rem] font-black uppercase tracking-[0.16em] text-ink"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
            />
            <Download
              className="relative z-10 h-3.5 w-3.5 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-paper"
              aria-hidden="true"
            />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-paper">
              Download CV
            </span>
          </MagneticButton>
        </div>
      </div>
    </motion.aside>
  );
}
