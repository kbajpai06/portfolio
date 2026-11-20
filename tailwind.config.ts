import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0E14",
        panel: "#10151D",
        panel2: "#141B25",
        line: "#1E2630",
        primary: "#E8EDF2",
        cream: "#EDEADE",
        muted: "#7C8798",
        faint: "#4A5568",
        signal: "#4FE3C1",
        warn: "#FF6B4A",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
        serif: ["var(--font-serif)"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(232,237,242,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(232,237,242,0.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
