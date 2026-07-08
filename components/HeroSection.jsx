"use client";

import BlurText from "@/components/BlurText";
import DecryptedText from "@/components/DecryptedText";
import Folder from "@/components/Folder";
import FolderCardItem from "@/components/FolderCardItem";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen snap-start overflow-hidden bg-[#f5f0e8] px-0 py-0 text-[#0a0a0a] selection:bg-black selection:text-[#f5f0e8]"
    >
      {/* === BRUTALIST GRID BACKGROUND === */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #0a0a0a 0px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #0a0a0a 0px, transparent 1px, transparent 60px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* === TOP BLACK BAR === */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 z-20 h-2 w-full bg-black"
      />
      {/* === RIGHT BLACK BAR === */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 z-20 h-full w-3 bg-black"
      />
      {/* === BOTTOM BLACK BAR === */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-20 h-2 w-full bg-black"
      />

      {/* === BRUTALIST CORNER DECORATIONS === */}
      <div
        aria-hidden="true"
        className="absolute left-6 top-6 z-10 hidden h-20 w-20 border-4 border-black bg-[#ff4d00] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute right-6 top-20 z-10 hidden h-14 w-14 border-4 border-black bg-[#f5f0e8] shadow-[6px_6px_0_#0a0a0a] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-6 right-10 z-10 hidden h-8 w-32 border-3 border-black bg-black text-center text-[10px] font-black uppercase leading-8 tracking-[0.3em] text-[#f5f0e8] lg:block"
      >
        V1.0
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Section Number Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 inline-flex -rotate-2 border-3 border-black bg-[#ff4d00] px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white shadow-[4px_4px_0_#0a0a0a]"
          >
            01 — HOME
          </motion.div>

          {/* Brutalist decorative box */}
          <div
            aria-hidden="true"
            className="absolute -left-3 top-16 h-16 w-16 border-3 border-black bg-white shadow-[6px_6px_0_#0a0a0a] sm:h-20 sm:w-20 sm:top-20"
          />

          <h1 className="relative max-w-6xl text-[clamp(4.3rem,14vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.1em] text-[#0a0a0a]">
            <BlurText
              text="PORT"
              delay={150}
              animateBy="letters"
              direction="top"
            />
            <br />
            <span className="inline-flex items-end gap-4 align-top">
              <BlurText
                text="FOLIO."
                delay={150}
                animateBy="letters"
                direction="top"
              />
              <motion.span
                initial={{ opacity: 0, filter: "blur(12px)", y: -18 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-4 ml-8 inline-flex sm:mb-6 sm:ml-12"
              >
                <Folder
                  color="#0a0a0a"
                  size={1.5}
                  items={[
                    <FolderCardItem
                      key="about"
                      icon="user"
                      label="About Me"
                      onClick={() => handleNavigate("about")}
                    />,
                    <FolderCardItem
                      key="skills"
                      icon="code"
                      label="Tech & Skill"
                      onClick={() => handleNavigate("skills")}
                    />,
                    <FolderCardItem
                      key="projects"
                      icon="folder"
                      label="Projects"
                      onClick={() => handleNavigate("projects")}
                    />,
                  ]}
                />
              </motion.span>
            </span>
          </h1>

          {/* Brutalist line divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "min(100%, 760px)" }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex items-center gap-2"
          >
            <div className="h-1 flex-1 bg-[#0a0a0a]" />
            <div className="h-1 w-12 bg-[#ff4d00]" />
            <div className="h-1 w-6 bg-[#0a0a0a]" />
          </motion.div>

          <DecryptedText
            text="Web Developer | Program Analyst"
            animateOn="view"
            speed={80}
            maxIterations={15}
            sequential={true}
            revealDirection="start"
            className="mt-6 max-w-3xl text-sm font-bold uppercase tracking-[0.18em] text-[#0a0a0a]/70 sm:text-base"
            encryptedClassName="mt-6 max-w-3xl text-sm font-bold uppercase tracking-[0.18em] text-[#0a0a0a]/70 sm:text-base"
          />

          {/* Brutalist CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 inline-flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 border-3 border-black bg-black px-6 py-4 text-xs font-black uppercase tracking-[0.3em] text-[#f5f0e8] shadow-[6px_6px_0_#ff4d00] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_#ff4d00]"
            >
              <span>VIEW WORK</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <div className="h-12 w-12 border-3 border-black bg-[#ff4d00] shadow-[4px_4px_0_#0a0a0a] flex items-center justify-center">
              <span className="text-lg font-black text-white">↓</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}