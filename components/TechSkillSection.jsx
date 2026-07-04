"use client";

import { motion } from "framer-motion";
import {
  SiCodeigniter,
  SiCss,
  SiDart,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiTailwindcss,
} from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";
import ClickSpark from "@/components/ClickSpark";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "CodeIgniter 4", icon: SiCodeigniter },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
];

export default function TechSkillSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen snap-start overflow-hidden bg-[#f7f7f2] px-6 py-24 text-[#0a0a0a] sm:px-10 lg:px-16"
    >
      <div aria-hidden="true" className="absolute inset-0 grid-paper opacity-80" />
      <div aria-hidden="true" className="absolute -right-20 top-24 h-56 w-56 rounded-full border-2 border-[#0a0a0a] bg-white shadow-[14px_14px_0_#0a0a0a]" />
      <div aria-hidden="true" className="absolute bottom-16 left-8 hidden h-32 w-32 bg-[#0a0a0a] lg:block" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] xl:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 inline-flex border-2 border-[#0a0a0a] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.32em] shadow-[6px_6px_0_#0a0a0a]">
            Stack / 03
          </div>

          <h2 className="text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-[0.78] tracking-[-0.1em]">
            TECH &
            <br />
            <span className="inline-block bg-[#0a0a0a] px-3 text-white">
              SKILL
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-base font-medium leading-8 text-[#4b4b4b]">
            A sharp toolkit for clean interfaces, structured systems, and responsive products. Built with practical web development habits and strong UI thinking.
          </p>

          <div className="mt-10 grid max-w-md grid-cols-3 border-2 border-[#0a0a0a] bg-white text-center shadow-[8px_8px_0_#0a0a0a]">
            {["Front-End", "Back-End", "Mobile"].map((item) => (
              <div key={item} className="border-r-2 border-[#0a0a0a] p-4 last:border-r-0">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.18em]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -inset-5 border-2 border-[#0a0a0a] bg-white shadow-[18px_18px_0_#0a0a0a]"
          />

          <ClickSpark
            sparkColor="#0a0a0a"
            sparkSize={15}
            sparkRadius={25}
            sparkCount={10}
            duration={500}
          >
            <div className="relative grid grid-cols-2 gap-3 bg-white p-3 md:grid-cols-3">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.article
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.58,
                      delay: index * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
                    className="group relative overflow-hidden border-2 border-[#0a0a0a] bg-[#f7f7f2] p-5 transition duration-300 hover:bg-[#0a0a0a] hover:text-white hover:shadow-[8px_8px_0_#b8b8aa] sm:p-6"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
                        backgroundSize: "18px 18px",
                      }}
                    />
                    <div className="relative flex min-h-28 flex-col justify-between">
                      <Icon className="text-4xl text-[#0a0a0a] transition duration-300 group-hover:text-white sm:text-5xl" />
                      <div>
                        <span className="mb-3 block h-1.5 w-10 bg-[#0a0a0a] transition duration-300 group-hover:bg-white" />
                        <h3 className="text-base font-black uppercase tracking-[-0.03em] sm:text-lg">
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </ClickSpark>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto mt-16 max-w-7xl"
      >
        <div className="h-24 overflow-hidden border-2 border-[#0a0a0a] bg-white shadow-[6px_6px_0_#0a0a0a]">
          <LogoLoop
            logos={skills.map((skill) => ({
              node: <skill.icon />,
              title: skill.name,
            }))}
            speed={80}
            direction="left"
            logoHeight={40}
            gap={48}
            hoverSpeed={20}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology stack"
          />
        </div>
      </motion.div>
    </section>
  );
}
