import { Space_Grotesk } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ThemeProvider from "@/components/ThemeProvider";
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

// Applied before paint so the correct theme is on <html> with no flash.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="relative">
        <ThemeProvider>
          <SmoothScrollProvider>
            <ScrollProgress />
            <CustomCursor />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
