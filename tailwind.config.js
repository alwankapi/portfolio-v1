/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        cinematic: {
          black: "#050505",
          charcoal: "#090909",
          text: "#FFFFFF",
          muted: "#B8B8B8",
          orange: "#FF5A1F",
          red: "#7A1208",
          amber: "#FF9A3C",
        },
      },
    },
  },
  plugins: [],
};