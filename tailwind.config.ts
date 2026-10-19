import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#070A0F",
          900: "#0B0F17",
          850: "#101622",
          800: "#161E2E",
          700: "#1F2B40",
          600: "#2B3A55",
        },
        glacier: {
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
        },
        focus: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
      },
    },
  },
  plugins: [],
};

export default config;
