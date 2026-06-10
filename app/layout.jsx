import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Alwan Kapi Muntaha | Cinematic Portfolio",
  description:
    "Personal portfolio of Alwan Kapi Muntaha — Web Developer, Program Analyst, and UI/UX Designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}