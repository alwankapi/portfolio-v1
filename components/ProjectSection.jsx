"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Amanah House",
    desc: "Property listing platform for real estate marketplace. Features property search, filtering, listing details, and responsive design for seamless browsing experience.",
    tags: ["CodeIgniter 4", "Bootstrap", "MySQL"],
    github: "https://github.com/alwankapi",
    demo: "https://amanah-house.iceiy.com/?i=1",
  },
  {
    title: "Project Two",
    desc: "Inventory management system built with CodeIgniter 4 and MySQL. Handles stock tracking, reporting, and multi-user role management.",
    tags: ["CodeIgniter 4", "PHP", "MySQL"],
    github: "https://github.com/alwankapi",
    demo: "#",
  },
  {
    title: "Project Three",
    desc: "Mobile application developed with Flutter and Dart. Cross-platform UI with state management and REST API integration.",
    tags: ["Flutter", "Dart", "REST API"],
    github: "https://github.com/alwankapi",
    demo: "#",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen snap-start overflow-hidden bg-[#ffffff] px-6 py-24 text-[#0a0a0a] sm:px-10 lg:px-16"
    >
      <div aria-hidden="true" className="absolute inset-0 grid-paper opacity-60" />
      <div aria-hidden="true" className="absolute bottom-12 left-12 hidden h-32 w-32 border-2 border-[#0a0a0a] bg-[#f7f7f2] shadow-[12px_12px_0_#0a0a0a] lg:block" />
      <div aria-hidden="true" className="absolute right-8 top-32 h-20 w-20 bg-[#0a0a0a] opacity-80" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 inline-flex border-2 border-[#0a0a0a] bg-[#0a0a0a] px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-white shadow-[6px_6px_0_#d8d8c8]">
            Work / 04
          </div>

          <h2 className="text-[clamp(3.4rem,8vw,8.5rem)] font-black uppercase leading-[0.78] tracking-[-0.1em]">
            PROJECTS
          </h2>

          <p className="mt-6 max-w-2xl border-l-4 border-[#0a0a0a] pl-5 text-base leading-8 text-[#323232]">
            Selected projects that showcase my skills in web and mobile development. Each project reflects clean architecture and practical problem-solving.
          </p>
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
              className="group relative flex flex-col border-2 border-[#0a0a0a] bg-white shadow-[10px_10px_0_#0a0a0a] transition duration-300 hover:-translate-y-1 hover:shadow-[14px_14px_0_#0a0a0a]"
            >
              <div className="flex-1 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 bg-[#0a0a0a]" />
                  <span className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-[#5f5f5f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-[-0.04em]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#4b4b4b]">
                  {project.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-[#0a0a0a] px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-[0.12em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex border-t-2 border-[#0a0a0a]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 border-r-2 border-[#0a0a0a] py-3 text-xs font-black uppercase tracking-[0.2em] transition duration-300 hover:bg-[#0a0a0a] hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 py-3 text-xs font-black uppercase tracking-[0.2em] transition duration-300 hover:bg-[#0a0a0a] hover:text-white"
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