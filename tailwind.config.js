/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: "Inter",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      "gray-100": "#F2F2F2",
      "gray-200": "#D9D9D9",
      "gray-300": "#808080",
      "gray-400": "#333333",
      "gray-500": "#262626",
      "gray-600": "#1A1A1A",
      "gray-700": "#0D0D0D",
      purple: "#8284FA",
      "dark-purple": "#5E60CE",
      blue: "#4EA8DE",
      "dark-blue": "#1E6F9F",
      "soft-red": "#E25858",
      emerald: "#34d399",
    },
    extend: {
      spacing: {
        13: "3.375rem",
        50: "12.5rem",
      },
    },
  },
  plugins: [],
};
