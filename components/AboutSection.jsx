"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="grid-paper relative min-h-screen snap-start overflow-hidden bg-[#f7f7f2] px-4 py-20 text-[#0a0a0a] sm:px-8 sm:py-32"
    >
      {/* Background decorations */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 border-[3px] border-[#D01B1B]/20 rounded-full animate-float" />
        <div className="absolute top-[30%] right-[8%] w-20 h-20 bg-[#D01B1B]/5 rotate-45 animate-float-reverse" />
        <div className="absolute bottom-[20%] left-[10%] w-16 h-16 border-[3px] border-[#0a0a0a]/10 animate-spin-slow" />
        <div className="absolute bottom-[40%] right-[15%] w-24 h-24 bg-[#F4EBD0]/60 rounded-full animate-float" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <div className="border-2 border-[#0a0a0a] bg-white p-2 shadow-[8px_8px_0_#0a0a0a]">
              <img
                src="/images/foto-awank bergaya formal.png"
                alt="Portrait"
                className="w-full aspect-[4/4.5] object-cover object-top"
              />
              <div className="mt-4 px-2 pb-2">
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight">
                  Alwan Kapi Muntaha
                </h3>
                <div className="mt-2 mb-3 h-[2px] w-full bg-[#0a0a0a]" />
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-[#0a0a0a]/60 whitespace-nowrap">
                  Web Developer | Program Analyst
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 46 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-0.1em] leading-[0.85] mb-6">
              ABOUT ME
            </h2>
            <div className="mb-6 h-1 w-32 bg-[#0a0a0a]" />
            <div className="space-y-4 text-[#4b4b4b] leading-relaxed text-sm sm:text-base">
              <p>
                Saya adalah seorang pengembang web dan desainer yang berbasis di Indonesia. Dengan pengalaman dalam membangun berbagai macam proyek digital, saya selalu berusaha menciptakan solusi yang tidak hanya fungsional tapi juga memiliki karakter.
              </p>
              <p>
                Pendekatan saya menggabungkan kebersihan kode dengan keberanian visual — setiap proyek adalah kesempatan untuk mengeksplorasi batas antara fungsi dan ekspresi.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="border-2 border-[#0a0a0a] p-4 bg-white shadow-[4px_4px_0_#0a0a0a]">
                <div className="text-2xl sm:text-3xl font-black text-[#0a0a0a]">3+</div>
                <div className="text-xs font-bold tracking-[0.15em] uppercase mt-1 text-[#0a0a0a]/60">Tahun</div>
              </div>
              <div className="border-2 border-[#0a0a0a] p-4 bg-white shadow-[4px_4px_0_#0a0a0a]">
                <div className="text-2xl sm:text-3xl font-black text-[#0a0a0a]">20+</div>
                <div className="text-xs font-bold tracking-[0.15em] uppercase mt-1 text-[#0a0a0a]/60">Proyek</div>
              </div>
              <div className="border-2 border-[#0a0a0a] p-4 bg-white shadow-[4px_4px_0_#0a0a0a]">
                <div className="text-2xl sm:text-3xl font-black text-[#0a0a0a]">15+</div>
                <div className="text-xs font-bold tracking-[0.15em] uppercase mt-1 text-[#0a0a0a]/60">Klien</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}