import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0f172a",
          surface: "#111827",
        },
        border: {
          DEFAULT: "#334155",
          soft: "#273449",
        },
        ink: {
          DEFAULT: "#e2e8f0",
          dim: "#cbd5e1",
          faint: "#94a3b8",
        },
        accent: {
          DEFAULT: "#d9b35a",
          soft: "#d9b35a22",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "IBM Plex Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      maxWidth: {
        prose: "42rem",
      },
      typography: () => ({
        invert: {
          css: {
            "--tw-prose-body": "#e2e8f0",
            "--tw-prose-headings": "#f8fafc",
            "--tw-prose-links": "#d9b35a",
            "--tw-prose-bold": "#f8fafc",
            "--tw-prose-code": "#d9b35a",
            "--tw-prose-quotes": "#94a3b8",
            "--tw-prose-quote-borders": "#334155",
            "--tw-prose-hr": "#334155",
            "--tw-prose-bullets": "#475569",
            "--tw-prose-counters": "#94a3b8",
          },
        },
      }),
      animation: {
        "pulse-slow": "pulse-slow 2.4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
