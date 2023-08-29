import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        background: "hsla(var(--background))",
        support: "hsla(var(--support))",
        foreground: "hsla(var(--foreground))",
        heading: "hsla(var(--heading))",
        accent: "hsla(var(--accent))",
        highlight: "hsla(var(--highlight))",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          {
            ...fontFamily.sans,
            fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
          },
        ],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        title: ["var(--font-title)", ...fontFamily.sans],
      },
    },
  },
};

export default config;
