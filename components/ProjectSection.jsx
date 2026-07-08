"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Amanah House",
    desc: "Property listing platform for real estate marketplace. Includes property search, category filtering, listing detail pages, and responsive browsing flow.",
    tags: ["CodeIgniter 4", "Bootstrap", "MySQL"],
    github: "https://github.com/alwankapi",
    demo: "https://amanah-house.iceiy.com/?i=1",
    status: "Live Site",
  },
  {
    title: "Inventory System",
    desc: "Stock management dashboard for product tracking, transaction records, reporting, and role-based admin workflows with structured database design.",
    tags: ["CodeIgniter 4", "PHP", "MySQL"],
    github: "https://github.com/alwankapi",
    demo: "#",
    status: "Case Study",
  },
  {
    title: "Flutter App",
    desc: "Cross-platform mobile interface built with Flutter and Dart. Focused on reusable widgets, API-ready structure, and clean user experience.",
    tags: ["Flutter", "Dart", "REST API"],
    github: "https://github.com/alwankapi",
    demo: "#",
    status: "Prototype",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen snap-start overflow-hidden bg-[#f5f0e8] px-0 py-0 text-[#0a0a0a] selection:bg-black selection:text-[#f5f0e8]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #0a0a0a 0px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #0a0a0a 0px, transparent 1px, transparent 60px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 z-20 h-2 w-full bg-black"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 z-20 h-full w-3 bg-black"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-20 h-2 w-full bg-black"
      />

      <div
        aria-hidden="true"
        className="absolute left-6 top-6 z-10 hidden h-20 w-20 border-4 border-black bg-[#ff4d00] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute right-10 top-24 z-10 hidden h-14 w-14 rotate-6 border-4 border-black bg-[#f5f0e8] shadow-[6px_6px_0_#0a0a0a] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 z-10 hidden h-8 w-36 border-3 border-black bg-black text-center text-[10px] font-black uppercase leading-8 tracking-[0.3em] text-[#f5f0e8] lg:block"
      >
        BUILD
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="mb-8 inline-flex -rotate-2 border-3 border-black bg-[#ff4d00] px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white shadow-[4px_4px_0_#0a0a0a]">
            04 — WORK
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <h2
                className="text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-[0.72] tracking-[-0.08em] text-black"
                style={{
                  WebkitTextStroke: "3px #0a0a0a",
                  paintOrder: "stroke fill",
                }}
              >
                PRO
                <span className="relative inline-block">
                  J
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 -top-4 h-6 w-6 bg-[#ff4d00]"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                  />
                </span>
                ECTS
              </h2>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-1 w-16 bg-black" />
                <div className="h-1 w-8 bg-[#ff4d00]" />
                <div className="h-1 w-4 bg-black" />
              </div>
            </div>

            <p className="border-l-4 border-black bg-white/70 p-5 text-sm font-medium leading-7 text-[#1a1a1a] backdrop-blur-sm sm:text-base sm:leading-8">
              Selected projects that show practical problem-solving across web
              platforms, backend systems, and mobile interfaces.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
              className="group relative flex min-h-[420px] flex-col border-3 border-black bg-white shadow-[10px_10px_0_#0a0a0a] transition duration-300 hover:shadow-[14px_14px_0_#ff4d00]"
            >
              <div className="flex items-center justify-between border-b-3 border-black bg-black px-5 py-3 text-[#f5f0e8]">
                <span className="text-[10px] font-black uppercase tracking-[0.32em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="border-2 border-[#f5f0e8] px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em]">
                  {project.status}
                </span>
              </div>

              <div className="relative flex flex-1 flex-col p-6">
                <div
                  aria-hidden="true"
                  className="absolute right-5 top-5 h-10 w-10 border-3 border-black bg-[#ff4d00] transition duration-300 group-hover:rotate-45"
                />

                <div className="relative z-10">
                  <span className="mb-5 block h-2 w-14 bg-black" />

                  <h3 className="max-w-[12rem] text-3xl font-black uppercase leading-[0.9] tracking-[-0.06em]">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#333]">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-2 border-black bg-[#f5f0e8] px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-[0.12em] shadow-[3px_3px_0_#0a0a0a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 border-t-3 border-black">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-r-3 border-black py-4 text-xs font-black uppercase tracking-[0.2em] transition duration-300 hover:bg-black hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 text-xs font-black uppercase tracking-[0.2em] transition duration-300 hover:bg-black hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}