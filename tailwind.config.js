/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#050816",
        panel: "rgba(16,24,40,0.70)",
        purplex: "#7C3AED",
        electric: "#2563EB",
        success: "#22C55E",
        amberx: "#F59E0B",
        danger: "#EF4444",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,58,237,.28)",
        blueglow: "0 0 34px rgba(37,99,235,.26)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 10%, rgba(124,58,237,.18), transparent 24rem), radial-gradient(circle at 80% 5%, rgba(37,99,235,.16), transparent 22rem), linear-gradient(180deg, #050816 0%, #070A18 55%, #050816 100%)",
      },
    },
  },
  plugins: [],
};
