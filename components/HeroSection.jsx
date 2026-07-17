"use client";

import BlurText from "@/components/BlurText";
import DecryptedText from "@/components/DecryptedText";
import Folder from "@/components/Folder";
import FolderCardItem from "@/components/FolderCardItem";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="grid-paper relative min-h-screen snap-start overflow-hidden bg-[#f7f7f2] px-6 py-8 text-[#0a0a0a] sm:px-10 lg:px-16"
    >
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 24, -16, 0],
          y: [0, -18, 18, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="hero-splash absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between">
        <div className="py-24 sm:py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute -left-3 top-5 h-20 w-20 border-2 border-[#0a0a0a] bg-white shadow-[8px_8px_0_#0a0a0a] sm:h-28 sm:w-28"
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
                  transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-4 ml-8 inline-flex flex-col items-center sm:mb-6 sm:ml-12"
                >
                  <Folder
                    color="#0a0a0a"
                    size={1.5}
                    items={[
                      <FolderCardItem
                        key="about"
                        icon="user"
                        label="About"
                        onClick={() => scrollTo("about")}
                      />,
                      <FolderCardItem
                        key="projects"
                        icon="code"
                        label="Portfolio"
                        onClick={() => scrollTo("projects")}
                      />,
                      <FolderCardItem
                        key="contact"
                        icon="briefcase"
                        label="Contact"
                        onClick={() => scrollTo("contact")}
                      />,
                    ]}
                  />
                  <span className="mt-2 text-[10px] sm:text-xs font-bold tracking-[0.15em] text-[#0a0a0a]/60 uppercase whitespace-nowrap">
                    {"< portfolio. />"}
                  </span>
                </motion.span>
              </span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "min(100%, 760px)" }}
              transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 h-3 bg-[#0a0a0a] sm:h-4"
            />

            <DecryptedText
              text="Web Developer | Program Analyst"
              animateOn="view"
              speed={80}
              maxIterations={15}
              sequential={true}
              revealDirection="start"
              className="mt-6 max-w-3xl text-sm font-bold uppercase tracking-[0.18em] text-[#4b4b4b] sm:text-base"
              encryptedClassName="mt-6 max-w-3xl text-sm font-bold uppercase tracking-[0.18em] text-[#4b4b4b] sm:text-base"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}