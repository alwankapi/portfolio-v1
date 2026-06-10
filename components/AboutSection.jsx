"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const infoGroups = [
  {
    title: "EDUCATION",
    items: ["Information Systems Student", "Universitas Bina Sarana Informatika"],
  },
  {
    title: "FOCUS",
    items: ["Web Development", "Program Analysis", "UI/UX Design"],
  },
  {
    title: "TOOLS",
    items: ["Next.js", "Tailwind CSS", "PHP", "CodeIgniter 4", "Laravel", "Flutter"],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen snap-start overflow-hidden bg-[#ffffff] px-6 py-24 text-[#0a0a0a] sm:px-10 lg:px-16"
    >
      <div aria-hidden="true" className="absolute inset-0 grid-paper opacity-60" />
      <div aria-hidden="true" className="absolute left-0 top-0 h-full w-5 bg-[#0a0a0a]" />
      <div aria-hidden="true" className="absolute bottom-10 right-10 hidden h-24 w-24 border-2 border-[#0a0a0a] bg-[#f7f7f2] shadow-[9px_9px_0_#0a0a0a] lg:block" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] xl:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -44, rotate: -1 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-4 -top-4 h-full w-full border-2 border-[#0a0a0a] bg-[#0a0a0a]" />
          <div className="relative overflow-hidden border-2 border-[#0a0a0a] bg-[#f7f7f2] shadow-[14px_14px_0_#0a0a0a]">
            <div className="relative aspect-[4/5] min-h-[460px]">
              <Image
                src="/images/alwan-orange.png"
                alt="Portrait of Alwan Kapi Muntaha"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover grayscale contrast-125 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.58),transparent_28%)]" />
            </div>

            <div className="grid border-t-2 border-[#0a0a0a] bg-white md:grid-cols-[1fr_auto]">
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-[#5f5f5f]">
                  Hello, I am
                </p>
                <h2 className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl">
                  Alwan Kapi Muntaha
                </h2>
              </div>
              <div className="border-t-2 border-[#0a0a0a] bg-[#0a0a0a] p-5 text-sm font-black uppercase tracking-[0.2em] text-white md:border-l-2 md:border-t-0 [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl]">
                Web Developer
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 46 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 inline-flex border-2 border-[#0a0a0a] bg-[#0a0a0a] px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-white shadow-[6px_6px_0_#d8d8c8]">
            Profile / 02
          </div>

          <h2 className="text-[clamp(3.4rem,8vw,8.5rem)] font-black uppercase leading-[0.78] tracking-[-0.1em]">
            ABOUT
            <br />
            ME
          </h2>

          <p className="mt-8 max-w-3xl border-l-4 border-[#0a0a0a] pl-5 text-base leading-8 text-[#323232] sm:text-lg">
            I am a Web Developer with a strong interest in website development, program analysis, and user interface design. I enjoy creating modern, responsive, and user-friendly digital experiences. My focus is on building clean web interfaces, analyzing system needs, and turning ideas into functional applications using technologies such as PHP, CodeIgniter, Laravel, Tailwind CSS, JavaScript, and Flutter.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {infoGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.18 + index * 0.08 }}
                className="border-2 border-[#0a0a0a] bg-white p-5 shadow-[7px_7px_0_#0a0a0a] transition duration-300 hover:-translate-y-1 hover:shadow-[11px_11px_0_#0a0a0a]"
              >
                <h3 className="mb-4 border-b-2 border-[#0a0a0a] pb-3 text-xs font-black uppercase tracking-[0.25em]">
                  {group.title}
                </h3>
                <ul className="space-y-2 text-sm font-semibold leading-6 text-[#3b3b3b]">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#0a0a0a]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
