"use client";

import TiltCard from "@/components/ui/TiltCard";

const PHOTO = "/images/foto-awank bergaya formal.png";
const NAME = "Alwan Kapi Muntaha";
const ROLE = "Web Developer / Program Analyst";

/** Widths of the decorative barcode strip in the footer. */
const BARCODE = [3, 1, 2, 1, 4, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1, 3, 1, 4, 2, 1, 2, 3];

/**
 * ID-badge styled profile card used in the About section.
 */
export default function ProfilePhotoCard() {
  return (
    <TiltCard max={10} scale={1.02} className="group h-full">
      <div className="overflow-hidden border-2 border-ink bg-surface shadow-brutal-lg">
        {/* Header strip */}
        <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-3 py-2">
          <span className="font-mono text-[0.58rem] font-black uppercase tracking-[0.22em] text-paper">
            ID // 001
          </span>
          <span className="flex items-center gap-1.5">
            <span className="status-dot" aria-hidden="true" />
            <span className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.16em] text-paper/70">
              Active
            </span>
          </span>
        </div>

        {/* Photo */}
        <div className="relative overflow-hidden border-b-2 border-ink">
          <img
            src={PHOTO}
            alt={`Portrait of ${NAME}`}
            className="aspect-[4/4.4] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
          />
          {/* Scanline texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgb(var(--ink)) 0px, rgb(var(--ink)) 1px, transparent 1px, transparent 4px)",
            }}
          />
          {/* Corner brackets */}
          <span
            aria-hidden="true"
            className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-paper/80"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-paper/80"
          />
        </div>

        {/* Data rows */}
        <div className="divide-y-2 divide-ink">
          <div className="px-3 py-2.5">
            <span className="block font-mono text-[0.52rem] font-bold uppercase tracking-[0.2em] text-ink/50">
              Name
            </span>
            <span className="mt-0.5 block text-sm font-black uppercase leading-tight tracking-tight text-ink">
              {NAME}
            </span>
          </div>
          <div className="px-3 py-2.5">
            <span className="block font-mono text-[0.52rem] font-bold uppercase tracking-[0.2em] text-ink/50">
              Role
            </span>
            <span className="mt-0.5 block text-[0.68rem] font-bold uppercase leading-tight tracking-[0.06em] text-ink/70">
              {ROLE}
            </span>
          </div>
        </div>

        {/* Barcode footer */}
        <div className="flex items-end gap-[2px] border-t-2 border-ink bg-paper px-3 py-2.5">
          {BARCODE.map((width, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="h-4 bg-ink"
              style={{ width: `${width}px` }}
            />
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
