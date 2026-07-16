import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette captured from actdecks.com.au
        brand: {
          orange: "#EA6821", // accent — nav bar, highlights
          navy: "#071323",   // headings / links
          button: "#09162A", // primary button
          dark: "#1A2538",   // dark section background
        },
        body: "#525558",     // body copy grey
        light: "#F8F9FA",
      },
      fontFamily: {
        heading: ["var(--font-barlow)", "sans-serif"],
        body: ["var(--font-rubik)", "sans-serif"],
        hind: ["var(--font-hind)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
