import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0B0F12",
          surface: "#11161B",
          raised: "#161C22",
          border: "#232B32",
        },
        ink: {
          DEFAULT: "#E7EDF1",
          muted: "#8FA0AB",
          faint: "#5C6B75",
        },
        signal: {
          teal: "#4FB3BF",
          tealDim: "#33808A",
          blue: "#5B84A8",
          amber: "#C99A5B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        drift: {
          "0%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(6px,-8px)" },
          "100%": { transform: "translate(0,0)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        drift: "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
