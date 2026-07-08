"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

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
  return (
    <section
      id="contact"
      className="relative min-h-screen snap-start overflow-hidden bg-[#f5f0e8] px-6 py-24 text-[#0a0a0a] sm:px-10 lg:px-16"
    >
      <div aria-hidden="true" className="absolute inset-0 grid-paper opacity-80" />
      <div aria-hidden="true" className="absolute right-10 top-1/3 hidden h-48 w-48 rounded-full border-2 border-[#0a0a0a] bg-white shadow-[18px_18px_0_#0a0a0a] lg:block" />
      <div aria-hidden="true" className="absolute bottom-20 left-8 h-16 w-16 bg-[#0a0a0a]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] xl:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 inline-flex border-2 border-[#0a0a0a] bg-[#0a0a0a] px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-white shadow-[6px_6px_0_#d8d8c8]">
            Connect / 05
          </div>

          <h2 className="text-[clamp(3.4rem,8vw,8.5rem)] font-black uppercase leading-[0.78] tracking-[-0.1em]">
            GET IN
            <br />
            TOUCH
          </h2>

          <p className="mt-8 max-w-lg border-l-4 border-[#0a0a0a] pl-5 text-base leading-8 text-[#323232]">
            Have a project in mind or just want to say hi? Drop me a message. I'm always open to discussing new opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:alwankapi@gmail.com"
              className="inline-flex items-center gap-3 rounded-full border-2 border-[#0a0a0a] bg-[#0a0a0a] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0a0a0a] hover:shadow-[7px_7px_0_#0a0a0a]"
            >
              <Mail className="h-4 w-4" />
              Send Email
            </a>
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0a0a0a] bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.18em] shadow-[5px_5px_0_#0a0a0a]">
              <MapPin className="h-4 w-4" />
              Indonesia
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border-2 border-[#0a0a0a] bg-white shadow-[14px_14px_0_#0a0a0a]">
            <div className="border-b-2 border-[#0a0a0a] bg-[#0a0a0a] px-6 py-3">
              <p className="text-xs font-black uppercase tracking-[0.32em] text-white">
                Social Links
              </p>
            </div>

            <div className="divide-y-2 divide-[#0a0a0a]">
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center justify-between px-6 py-5 transition duration-300 hover:bg-[#0a0a0a]"
                >
                  <span className="text-sm font-black uppercase tracking-[0.15em] transition duration-300 group-hover:text-white">
                    {social.label}
                  </span>
                  <span className="text-sm font-semibold text-[#5f5f5f] transition duration-300 group-hover:text-white">
                    {social.handle}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}