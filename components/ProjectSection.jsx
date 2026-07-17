"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Amanah House",
    desc: "Platform e-commerce properti dengan fokus pada UX yang bersih dan performa tinggi untuk jual beli rumah.",
    tags: ["E-Commerce"],
    year: "2024",
    demo: "https://amanah-house.iceiy.com/?i=1",
    // Using placeholder screenshot - in production you'd use a real screenshot service
    image: "https://image.thum.io/get/width/800/crop/500/noanimate/https://amanah-house.iceiy.com/?i=1",
  },
  {
    title: "Analytics Dashboard",
    desc: "Dashboard analitik real-time dengan visualisasi data yang interaktif untuk monitoring bisnis.",
    tags: ["Dashboard"],
    year: "2024",
    demo: "#",
    image: "https://picsum.photos/seed/analytics-dashboard/800/500.jpg",
  },
  {
    title: "Startup Landing",
    desc: "Halaman landing untuk startup teknologi dengan animasi modern dan tingkat konversi tinggi.",
    tags: ["Landing Page"],
    year: "2023",
    demo: "#",
    image: "https://picsum.photos/seed/startup-landing-page/800/500.jpg",
  },
  {
    title: "Mobile App UI",
    desc: "Desain aplikasi mobile untuk tracking aktivitas fitness dengan antarmuka minimalis.",
    tags: ["Mobile App"],
    year: "2023",
    demo: "#",
    image: "https://picsum.photos/seed/mobile-fitness-app/800/500.jpg",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="grid-paper relative min-h-screen snap-start overflow-hidden bg-[#f7f7f2] px-4 py-20 text-[#0a0a0a] sm:px-8 sm:py-32"
    >
      {/* Background decorations */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[40%] w-2 h-2 bg-[#0a0a0a]/30 rotate-45 animate-float" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-black tracking-[0.32em] uppercase text-[#0a0a0a]">02</span>
          <div className="flex-1 h-[2px] bg-[#0a0a0a]" />
          <span className="text-xs font-black tracking-[0.32em] uppercase text-[#0a0a0a]/60">Projects</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-0.1em] leading-[0.85] mb-6">
          SELECTED
          <br />
          WORKS
        </h2>
        <div className="mb-12 h-1 w-32 bg-[#0a0a0a]" />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="project-card border-2 border-[#0a0a0a] bg-white shadow-[6px_6px_0_#0a0a0a] hover:shadow-[8px_8px_0_#0a0a0a] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 cursor-pointer group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img w-full aspect-[16/10] object-cover grayscale transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs tracking-[0.2em] uppercase font-black text-[#0a0a0a]">
                    {project.tags[0]}
                  </span>
                  <span className="text-xs font-bold text-[#0a0a0a]/60">{project.year}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#4b4b4b] leading-relaxed">{project.desc}</p>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-4 text-[#0a0a0a] font-black text-sm group-hover:gap-3 transition-all uppercase tracking-wider"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}