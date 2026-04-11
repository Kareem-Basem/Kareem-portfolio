/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#070B14",
        panel: "rgba(13, 18, 32, 0.72)",
        line: "rgba(148, 163, 184, 0.18)",
        neon: {
          blue: "#38BDF8",
          purple: "#8B5CF6",
          cyan: "#22D3EE",
        },
      },
      boxShadow: {
        glow: "0 0 35px rgba(56, 189, 248, 0.18)",
        card: "0 24px 80px rgba(15, 23, 42, 0.45)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
