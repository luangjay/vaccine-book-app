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
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsla(var(--background))",
        foreground: "hsla(var(--foreground))",
        support: "hsla(var(--support))",
        highlight: "hsla(var(--highlight))",
        primary: {
          DEFAULT: "hsla(var(--primary))",
          light: "hsla(var(--primary-light))",
          dark: "hsla(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary))",
          light: "hsla(var(--secondary-light))",
          dark: "hsla(var(--secondary-dark))",
        },
        info: {
          DEFAULT: "hsla(var(--info))",
          light: "hsla(var(--info-light))",
          dark: "hsla(var(--info-dark))",
        },
        success: {
          DEFAULT: "hsla(var(--success))",
          light: "hsla(var(--success-light))",
          dark: "hsla(var(--success-dark))",
        },
        warning: {
          DEFAULT: "hsla(var(--warning))",
          light: "hsla(var(--warning-light))",
          dark: "hsla(var(--warning-dark))",
        },
        error: {
          DEFAULT: "hsla(var(--error))",
          light: "hsla(var(--error-light))",
          dark: "hsla(var(--error-dark))",
        },
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
