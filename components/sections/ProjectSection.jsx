"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

const FALLBACK_IMAGE = "/images/mockup-fallback.svg";

/** How many cards are visible before the user expands the grid. */
const PREVIEW_COUNT = 2;

const projects = [
  {
    title: "Amanah House",
    desc: "Platform e-commerce properti dengan fokus pada UX yang bersih dan performa tinggi untuk jual beli rumah.",
    tags: ["E-Commerce"],
    year: "2024",
    demo: "https://amanah-house.iceiy.com/?i=1",
    // Locally rendered high-res mockup — no more broken external screenshot service.
    image: "/images/mockup-amanah-house.svg",
  },
  {
    title: "Analytics Dashboard",
    desc: "Dashboard analitik real-time dengan visualisasi data yang interaktif untuk monitoring bisnis.",
    tags: ["Dashboard"],
    year: "2024",
    demo: "#",
    image: "https://picsum.photos/seed/analytics-dashboard/1600/1000.jpg",
  },
  {
    title: "Startup Landing",
    desc: "Halaman landing untuk startup teknologi dengan animasi modern dan tingkat konversi tinggi.",
    tags: ["Landing Page"],
    year: "2023",
    demo: "#",
    image: "https://picsum.photos/seed/startup-landing-page/1600/1000.jpg",
  },
  {
    title: "Mobile App UI",
    desc: "Desain aplikasi mobile untuk tracking aktivitas fitness dengan antarmuka minimalis.",
    tags: ["Mobile App"],
    year: "2023",
    demo: "#",
    image: "https://picsum.photos/seed/mobile-fitness-app/1600/1000.jpg",
  },
];


function ProjectCard({ project }) {
  const [src, setSrc] = useState(project.image);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.94 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard max={9} scale={1.02} className="group h-full">
        <div className="project-card h-full border-2 border-ink bg-surface shadow-brutal-md transition-shadow duration-300 group-hover:shadow-brutal-xl">
          <div className="overflow-hidden border-b-2 border-ink">
            <img
              src={src}
              onError={() => setSrc(FALLBACK_IMAGE)}
              alt={`${project.title} preview`}
              className="project-img aspect-[16/10] w-full object-cover grayscale transition-all duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-5 sm:p-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-ink">
                {project.tags[0]}
              </span>
              <span className="text-xs font-bold text-ink/60">{project.year}</span>
            </div>
            <h3 className="mb-2 text-xl font-black uppercase tracking-tight sm:text-2xl">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{project.desc}</p>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-ink transition-all group-hover:gap-3"
            >
              <span>View Project</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </TiltCard>
    </motion.article>
  );
}

export default function ProjectSection() {
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = useMemo(
    () => (expanded ? projects : projects.slice(0, PREVIEW_COUNT)),
    [expanded]
  );

  const hasMore = projects.length > PREVIEW_COUNT;
  const hiddenCount = projects.length - PREVIEW_COUNT;

  return (
    <section
      id="projects"
      className="grid-paper relative min-h-screen overflow-hidden bg-paper px-4 py-20 text-ink sm:px-8 sm:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[40%] top-[15%] h-2 w-2 rotate-45 animate-float bg-ink/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal direction="up">
          <h2 className="mb-6 text-3xl font-black uppercase leading-[0.85] tracking-[-0.1em] sm:text-4xl md:text-5xl">
            SELECTED
            <br />
            WORKS
          </h2>
        </Reveal>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 h-1 bg-ink"
        />

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show all / show less toggle */}
        {hasMore && (
          <motion.div layout className="mt-10 flex justify-center">
            <MagneticButton
              strength={0.28}
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="group relative inline-flex items-center gap-3 overflow-hidden border-2 border-ink bg-surface px-7 py-3.5 text-xs font-black uppercase tracking-[0.18em] text-ink shadow-brutal transition-shadow duration-200 hover:shadow-brutal-md"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-paper">
                {expanded ? "Show Less" : `Show All (+${hiddenCount})`}
              </span>
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="relative z-10 transition-colors duration-300 group-hover:text-paper"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </MagneticButton>
          </motion.div>
        )}
      </div>
    </section>
  );
}
