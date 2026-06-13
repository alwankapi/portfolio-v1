import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f7f2] px-6 text-[#0a0a0a]">
      <div className="border-2 border-[#0a0a0a] bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.32em] shadow-[6px_6px_0_#0a0a0a]">
        Error / 404
      </div>

      <h1 className="mt-8 text-[clamp(6rem,16vw,12rem)] font-black leading-[0.78] tracking-[-0.1em]">
        LOST
        <br />
        PAGE
      </h1>

      <p className="mt-6 max-w-md border-l-4 border-[#0a0a0a] pl-5 text-base leading-8 text-[#323232]">
        The page you're looking for doesn't exist or has moved. Let's get you back on track.
      </p>

      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-3 rounded-full border-2 border-[#0a0a0a] bg-[#0a0a0a] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0a0a0a] hover:shadow-[7px_7px_0_#0a0a0a]"
      >
        Back Home
      </Link>
    </main>
  );
}