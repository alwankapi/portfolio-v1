"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/alwankapi",
    handle: "@alwankapi",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alwankapi",
    handle: "alwankapi",
  },
  {
    label: "Email",
    href: "mailto:alwankapi@gmail.com",
    handle: "alwankapi@gmail.com",
  },
];

export default function ContactSection() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    e.target.reset();
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <section
      id="contact"
      className="grid-paper relative min-h-screen snap-start overflow-hidden bg-[#f7f7f2] px-4 py-20 text-[#0a0a0a] sm:px-8 sm:py-32"
    >
      {/* Background decorations */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[20%] left-[10%] w-16 h-16 border-[3px] border-[#0a0a0a]/10 animate-spin-slow" />
        <div className="absolute bottom-[40%] right-[15%] w-24 h-24 bg-[#F4EBD0]/60 rounded-full animate-float" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-0.1em] leading-[0.85] mb-6">
              LET'S WORK
              <br />
              TOGETHER
            </h2>
            <div className="mb-6 h-1 w-32 bg-[#0a0a0a]" />
            <p className="text-[#4b4b4b] leading-relaxed mb-10 text-sm sm:text-base">
              Punya proyek menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya melalui form ini atau langsung melalui kontak di bawah.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <a
                href="mailto:alwankapi@gmail.com"
                className="flex items-center gap-4 border-2 border-[#0a0a0a] p-4 bg-white shadow-[4px_4px_0_#0a0a0a] hover:shadow-[6px_6px_0_#0a0a0a] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-[#D01B1B] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs tracking-[0.15em] uppercase text-[#0a0a0a]/60 mb-1 font-bold">Email</div>
                  <div className="font-black text-sm transition-colors">
                    alwankapi@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/alwankapi"
                className="flex items-center gap-4 border-2 border-[#0a0a0a] p-4 bg-white shadow-[4px_4px_0_#0a0a0a] hover:shadow-[6px_6px_0_#0a0a0a] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#F3F0E6]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs tracking-[0.15em] uppercase text-[#0a0a0a]/60 mb-1 font-bold">GitHub</div>
                  <div className="font-black text-sm transition-colors">
                    @alwankapi
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/alwan-kapi-muntaha-a63b83422"
                className="flex items-center gap-4 border-2 border-[#0a0a0a] p-4 bg-white shadow-[4px_4px_0_#0a0a0a] hover:shadow-[6px_6px_0_#0a0a0a] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-[#F4EBD0] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs tracking-[0.15em] uppercase text-[#0a0a0a]/60 mb-1 font-bold">LinkedIn</div>
                  <div className="font-black text-sm transition-colors">
                    Alwan Kapi Muntaha
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-[#0a0a0a]/60 mb-2 font-bold">
                  Nama
                </label>
                <input
                  type="text"
                  placeholder="Nama lengkap kamu"
                  className="contact-input w-full border-2 border-[#0a0a0a] px-4 py-3 bg-white text-sm font-bold transition-all duration-200 placeholder:text-[#0a0a0a]/30 focus:shadow-[4px_4px_0_#0a0a0a] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-[#0a0a0a]/60 mb-2 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@kamu.com"
                  className="contact-input w-full border-2 border-[#0a0a0a] px-4 py-3 bg-white text-sm font-bold transition-all duration-200 placeholder:text-[#0a0a0a]/30 focus:shadow-[4px_4px_0_#0a0a0a] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-[#0a0a0a]/60 mb-2 font-bold">
                  Subjek
                </label>
                <input
                  type="text"
                  placeholder="Tentang apa?"
                  className="contact-input w-full border-2 border-[#0a0a0a] px-4 py-3 bg-white text-sm font-bold transition-all duration-200 placeholder:text-[#0a0a0a]/30 focus:shadow-[4px_4px_0_#0a0a0a] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-[#0a0a0a]/60 mb-2 font-bold">
                  Pesan
                </label>
                <textarea
                  rows="5"
                  placeholder="Ceritakan proyek kamu..."
                  className="contact-input w-full border-2 border-[#0a0a0a] px-4 py-3 bg-white text-sm font-bold transition-all duration-200 placeholder:text-[#0a0a0a]/30 resize-none focus:shadow-[4px_4px_0_#0a0a0a] focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full border-2 border-[#0a0a0a] bg-[#0a0a0a] text-white font-black uppercase tracking-[0.15em] text-sm px-6 py-4 shadow-[6px_6px_0_#0a0a0a] hover:shadow-[8px_8px_0_#0a0a0a] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Kirim Pesan</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
            {/* Toast */}
            {showToast && (
              <div className="mt-4 border-2 border-[#0a0a0a] bg-[#0a0a0a] text-white p-4 flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-bold">Message sent successfully! I'll reply soon.</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}