import { Space_Grotesk } from "next/font/google";
import "./globals.css";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: {
    default: "Alwan Kapi Muntaha | Portfolio",
    template: "%s | Alwan Kapi Muntaha",
  },
  description:
    "Personal portfolio of Alwan Kapi Muntaha — Web Developer, Program Analyst, and UI/UX Designer.",
  keywords: [
    "Alwan Kapi Muntaha",
    "Web Developer",
    "UI/UX Designer",
    "Portfolio",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [{ name: "Alwan Kapi Muntaha" }],
  openGraph: {
    title: "Alwan Kapi Muntaha | Portfolio",
    description:
      "Personal portfolio of Alwan Kapi Muntaha — Web Developer, Program Analyst.",
    url: "https://alwankapi.dev",
    siteName: "Alwan Kapi Muntaha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alwan Kapi Muntaha | Portfolio",
    description:
      "Personal portfolio of Alwan Kapi Muntaha — Web Developer, Program Analyst.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="relative">{children}</body>
    </html>
  );
}
