import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-mont)"],
        serif: ["var(--font-basker)"],
      },
      colors: {
        brandingNeutral: {
          400:"var(--branding-neutral-400)",
          700: "var(--branding-neutral-700)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
