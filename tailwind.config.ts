import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // hover: variants only apply on devices that can really hover, so a tap on
  // a phone doesn't leave a card stuck in its hover state
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      // The site's three curves (also CSS variables in globals.css):
      // out = entrances and UI, draw = pen strokes drawing themselves,
      // playful = hover lifts that overshoot a little.
      // "out" replaces Tailwind's built-in ease-out, so every ease-out class
      // on the site gets the stronger curve.
      transitionTimingFunction: {
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
        draw: "cubic-bezier(0.45, 0, 0.35, 1)",
        playful: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-recoleta)", "Georgia", "serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.5s ease-out both",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
