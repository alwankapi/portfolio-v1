"use client";

import BlurText from "@/components/BlurText";
import DecryptedText from "@/components/DecryptedText";
import Folder from "@/components/Folder";
import FolderCardItem from "@/components/FolderCardItem";
import MarqueeDivider from "@/components/MarqueeDivider";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

/** Small git-branch glyph used next to the latest commit line. */
function GitBranchIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function LiveStatusPanel() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="lg:col-span-4"
      aria-label="Live status"
    >
      <div className="border-2 border-ink bg-surface shadow-brutal-lg">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-4 py-2">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-paper sm:text-sm">
            Live Status
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-paper/70">
            /feed
          </span>
        </div>

        <div className="space-y-5 p-4 sm:p-5">
          {/* Availability */}
          <div>
            <div className="flex items-center gap-2">
              <span className="status-dot" aria-hidden="true" />
              <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted">
                Open to opportunities
              </span>
            </div>
            <p className="mt-2 font-mono text-sm font-bold uppercase tracking-[0.08em] text-ink">
              Full-Time / Freelance
            </p>
          </div>

          <div className="h-[2px] w-full bg-ink" />

          {/* Latest commit */}
          <div>
            <div className="flex items-center gap-2">
              <GitBranchIcon className="h-3.5 w-3.5 text-ink" />
              <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted">
                Latest repo commit
              </span>
            </div>
            <p className="mt-2 break-words border-2 border-ink bg-paper px-3 py-2 font-mono text-xs text-ink">
              feat: add filter to projects
            </p>
            <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              2hr ago
            </p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

export default function HeroSection() {
  const { theme } = useTheme();
  // Folder.jsx takes a literal hex (it darkens it in JS), so it can't read the
  // CSS custom properties — feed it the ink colour for the active theme.
  const folderColor = theme === "dark" ? "#f4f4f0" : "#0a0a0a";

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="grid-paper relative min-h-screen snap-start overflow-hidden bg-paper px-6 py-8 text-ink sm:px-10 lg:px-16"
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

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center">
        <div className="grid grid-cols-1 items-center gap-10 pb-8 pt-24 sm:pt-16 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-8"
          >
            <div
              aria-hidden="true"
              className="absolute -left-3 top-5 h-20 w-20 border-2 border-ink bg-surface shadow-brutal-lg sm:h-28 sm:w-28"
            />

            <h1 className="relative max-w-6xl text-[clamp(4.3rem,14vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.1em] text-ink">
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
                    color={folderColor}
                    size={1.5}
                    items={[
                      <FolderCardItem
                        key="about"
                        icon="user"
                        label="About"
                        accent="#d01b1b"
                        onClick={() => scrollTo("about")}
                      />,
                      <FolderCardItem
                        key="projects"
                        icon="code"
                        label="Portfolio"
                        accent="#0a0a0a"
                        onClick={() => scrollTo("projects")}
                      />,
                      <FolderCardItem
                        key="contact"
                        icon="briefcase"
                        label="Contact"
                        accent="#1d4ed8"
                        onClick={() => scrollTo("contact")}
                      />,
                    ]}
                  />
                </motion.span>
              </span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "min(100%, 760px)" }}
              transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 h-3 bg-ink sm:h-4"
            />

            <DecryptedText
              text="Web Developer | Program Analyst"
              animateOn="view"
              speed={80}
              maxIterations={15}
              sequential={true}
              revealDirection="start"
              className="mt-6 max-w-3xl text-sm font-bold uppercase tracking-[0.18em] text-muted sm:text-base"
              encryptedClassName="mt-6 max-w-3xl text-sm font-bold uppercase tracking-[0.18em] text-muted sm:text-base"
            />
          </motion.div>

          <LiveStatusPanel />
        </div>

        {/* Services ticker — lives inside the hero, below the subheader */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="-mx-6 mt-16 sm:-mx-10 sm:mt-20 lg:-mx-16 lg:mt-24"
        >
          <MarqueeDivider />
        </motion.div>
      </div>
    </section>
  );
}
