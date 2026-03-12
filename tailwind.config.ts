import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Alfa Slab One"', "serif"],
        body: ['"Barlow Condensed"', "sans-serif"],
        sans: ['"Barlow Condensed"', "sans-serif"],
      },
      colors: {
        "fire-red": "hsl(var(--fire-red))",
        "fire-orange": "hsl(var(--fire-orange))",
        "fire-yellow": "hsl(var(--fire-yellow))",
        "fogata-black": "hsl(var(--fogata-black))",
        "fogata-dark": "hsl(var(--fogata-dark))",
        "fogata-cream": "hsl(var(--fogata-cream))",
        "fogata-brown": "hsl(var(--fogata-brown))",
      },
      backgroundImage: {
        "fire-gradient":
          "linear-gradient(135deg, hsl(var(--fire-red)) 0%, hsl(var(--fire-orange)) 50%, hsl(var(--fire-yellow)) 100%)",
        "dark-gradient":
          "radial-gradient(ellipse at center, hsl(var(--fogata-brown)) 0%, hsl(var(--fogata-black)) 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { filter: "drop-shadow(0 0 20px rgba(230, 48, 0, 0.6))" },
          "50%": { filter: "drop-shadow(0 0 40px rgba(255, 106, 26, 0.9))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [animate],
};

export default config;
