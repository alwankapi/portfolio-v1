"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

const FALLBACK_IMAGE = "/images/mockup-fallback.svg";

const projects = [
  {
    title: "Amanah House",
    desc: "Platform e-commerce properti dengan fokus pada UX yang bersih dan performa tinggi untuk jual beli rumah.",
    tags: ["E-Commerce"],
    categories: ["frontend", "backend"],
    year: "2024",
    demo: "https://amanah-house.iceiy.com/?i=1",
    // Locally rendered high-res mockup — no more broken external screenshot service.
    image: "/images/mockup-amanah-house.svg",
  },
  {
    title: "Analytics Dashboard",
    desc: "Dashboard analitik real-time dengan visualisasi data yang interaktif untuk monitoring bisnis.",
    tags: ["Dashboard"],
    categories: ["frontend", "backend"],
    year: "2024",
    demo: "#",
    image: "https://picsum.photos/seed/analytics-dashboard/1600/1000.jpg",
  },
  {
    title: "Startup Landing",
    desc: "Halaman landing untuk startup teknologi dengan animasi modern dan tingkat konversi tinggi.",
    tags: ["Landing Page"],
    categories: ["frontend", "uiux"],
    year: "2023",
    demo: "#",
    image: "https://picsum.photos/seed/startup-landing-page/1600/1000.jpg",
  },
  {
    title: "Mobile App UI",
    desc: "Desain aplikasi mobile untuk tracking aktivitas fitness dengan antarmuka minimalis.",
    tags: ["Mobile App"],
    categories: ["uiux"],
    year: "2023",
    demo: "#",
    image: "https://picsum.photos/seed/mobile-fitness-app/1600/1000.jpg",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "uiux", label: "UI/UX" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
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
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

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
          className="mb-8 h-1 bg-ink"
        />

        {/* Filters */}
        <Reveal direction="up" delay={0.1} className="mb-10">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-3"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <MagneticButton
                  key={filter.id}
                  strength={0.25}
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                  className={`relative overflow-hidden border-2 border-ink px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] transition-shadow duration-200 ${
                    isActive
                      ? "text-paper shadow-brutal-md"
                      : "bg-surface text-ink shadow-brutal hover:shadow-brutal-md"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-fill"
                      aria-hidden="true"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 bg-ink"
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </MagneticButton>
              );
            })}
          </div>
        </Reveal>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {visibleProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10 border-2 border-dashed border-ink/40 p-8 text-center text-sm font-black uppercase tracking-[0.2em] text-ink/50"
            >
              No projects in this category yet
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
