const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "441px",
      lg: "745px",
      xl: "991px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: { ...colors.neutral, 950: "#15181F" },
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      yellow: colors.yellow,
      blue: colors.blue,
      violet: colors.violet,
    },
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        "md-top":
          "0 35px 60px -15px rgba(0, 0, 0, 0.4)",
      },
      colors: {
        red: {
          400: "#E9E9E9",
          500: "#f75541",
          600: "#C8C8C8",
        },
        gray: {
          50: "#efeff0",
          100: "#F0F3F9",
          200: "#D7DCE4",
          300: "#A9AEB7",
          400: "#717885",
          450: "#323232",
          500: "#04080E",
        },
      },
    },
  },
  plugins: [],
};
