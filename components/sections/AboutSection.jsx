"use client";

import { motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

const stats = [
  { value: "3+", label: "Tahun" },
  { value: "20+", label: "Proyek" },
  { value: "15+", label: "Klien" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="grid-paper relative min-h-screen overflow-hidden bg-paper px-4 py-20 text-ink sm:px-8 sm:py-32"
    >
      {/* Background decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[10%] h-32 w-32 animate-float rounded-full border-[3px] border-brand/20" />
        <div className="absolute right-[8%] top-[30%] h-20 w-20 rotate-45 animate-float-reverse bg-brand/5" />
        <div className="absolute bottom-[20%] left-[10%] h-16 w-16 animate-spin-slow border-[3px] border-ink/10" />
        <div className="absolute bottom-[40%] right-[15%] h-24 w-24 animate-float rounded-full bg-accent/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Photo — 3D tilt frame */}
          <Reveal direction="right" amount={0.35} className="lg:col-span-4">
            <TiltCard max={12} scale={1.03} className="group h-full">
              <div className="border-2 border-ink bg-surface p-2 shadow-brutal-lg">
                <div className="overflow-hidden">
                  <img
                    src="/images/foto-awank bergaya formal.png"
                    alt="Portrait of Alwan Kapi Muntaha"
                    className="aspect-[4/4.5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4 px-2 pb-2">
                  <h3 className="text-lg font-black uppercase tracking-tight sm:text-xl">
                    Alwan Kapi Muntaha
                  </h3>
                  <div className="mb-3 mt-2 h-[2px] w-full bg-ink" />
                  <p className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.1em] text-ink/60 sm:text-sm">
                    Web Developer | Program Analyst
                  </p>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Text */}
          <div className="flex flex-col justify-center lg:col-span-8">
            <Reveal direction="up" delay={0.1}>
              <h2 className="mb-6 text-3xl font-black uppercase leading-[0.85] tracking-[-0.1em] sm:text-4xl md:text-5xl">
                ABOUT ME
              </h2>
            </Reveal>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 h-1 bg-ink"
            />

            <RevealGroup stagger={0.12} className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <RevealItem>
                <p>
                  Saya adalah seorang pengembang web dan desainer yang berbasis di
                  Indonesia. Dengan pengalaman dalam membangun berbagai macam proyek
                  digital, saya selalu berusaha menciptakan solusi yang tidak hanya
                  fungsional tapi juga memiliki karakter.
                </p>
              </RevealItem>
              <RevealItem>
                <p>
                  Pendekatan saya menggabungkan kebersihan kode dengan keberanian
                  visual — setiap proyek adalah kesempatan untuk mengeksplorasi batas
                  antara fungsi dan ekspresi.
                </p>
              </RevealItem>
            </RevealGroup>

            {/* Stats */}
            <RevealGroup stagger={0.12} delayChildren={0.15} className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <RevealItem key={stat.label}>
                  <motion.div
                    whileHover={{ y: -6, x: -3, rotate: -1.5 }}
                    transition={{ type: "spring", stiffness: 320, damping: 18 }}
                    className="border-2 border-ink bg-surface p-4 shadow-brutal hover:shadow-brutal-lg"
                  >
                    <div className="text-2xl font-black text-ink sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-ink/60">
                      {stat.label}
                    </div>
                  </motion.div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
