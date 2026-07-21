"use client";

import { motion } from "framer-motion";
import { FiPenTool as PenTool } from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiPython,
  SiMysql,
  SiFigma,
  SiCanva,
  SiInkscape,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiVercel,
  SiLinux,
  SiFirebase,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    bgColor: "bg-[#D01B1B]",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#264DE4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    icon: (
      <svg className="w-5 h-5 text-[#F3F0E6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
      </svg>
    ),
    bgColor: "bg-[#0a0a0a]",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "MySQL", icon: SiMysql, color: "#00758F" },
    ],
  },
  {
    title: "Design",
    icon: (
      <svg className="w-5 h-5 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    bgColor: "bg-[#F4EBD0]",
    skills: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Canva", icon: SiCanva, color: "#00C4CC" },
      { name: "Inkscape", icon: SiInkscape, color: "#000000" },
      { name: "UI/UX", icon: PenTool, color: "#0a0a0a" },
    ],
  },
  {
    title: "Tools",
    icon: (
      <svg className="w-5 h-5 text-[#D01B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-8.54 8.54c-.78.78-2.05.78-2.83 0l-1.17-1.17c-.78-.78-.78-2.05 0-2.83l8.54-8.54m2.83 2.83L6.25 3.14a1.5 1.5 0 00-1.06-.44h-.5a1.5 1.5 0 00-1.06.44L.31 6.07m15.08-.14a6 6 0 014.95-2.03 3 3 0 002.44 2.44 6 6 0 01-2.03 4.95m0 0l-4.95-4.95m0 0l4.95-4.95" />
      </svg>
    ),
    bgColor: "bg-[#D01B1B]/10",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "VS Code", icon: SiVisualstudiocode, color: "#0078D4" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
];

export default function TechSkillSection() {
  return (
    <section
      id="skills"
      className="grid-paper relative min-h-screen snap-start overflow-hidden bg-[#f7f7f2] px-4 py-20 text-[#0a0a0a] sm:px-8 sm:py-32"
    >
      {/* Background decorations */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[40%] right-[15%] w-24 h-24 bg-[#F4EBD0]/60 rounded-full animate-float" />
        <div className="absolute top-[60%] left-[50%] w-3 h-3 bg-[#D01B1B] rotate-45 animate-float-reverse" />
        <div className="absolute top-[50%] left-[2%] w-12 h-12 opacity-[0.06]">
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-[#0a0a0a] -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-[#0a0a0a] -translate-x-1/2"></div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-0.1em] leading-[0.85] mb-6">
          TOOLS &
          <br />
          TECH
        </h2>
        <div className="mb-12 h-1 w-32 bg-[#0a0a0a]" />

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.85,
                delay: catIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-2 border-[#0a0a0a] bg-white p-6 sm:p-8 shadow-[6px_6px_0_#0a0a0a]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 border-2 border-[#0a0a0a] ${category.bgColor} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-tag border-2 border-[#0a0a0a] px-4 py-2 text-sm font-bold transition-all duration-200 cursor-default inline-flex items-center gap-1.5 hover:shadow-[3px_3px_0_#0a0a0a] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                  >
                    {skill.icon && (
                      <skill.icon
                        className="w-4 h-4"
                        style={{ color: skill.color }}
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}