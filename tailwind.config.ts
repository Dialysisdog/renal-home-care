import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#EEF3F1",
        ink: "#1F2A2E",
        mute: "#57635F",
      },
      boxShadow: {
        card: "0 1px 2px rgba(31,42,46,0.06), 0 8px 24px -12px rgba(31,42,46,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
