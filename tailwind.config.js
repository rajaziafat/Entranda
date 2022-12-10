/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "-gray": "#707070",
        "-black": "#1C1919",
        "-green": "#00B1A7",
        "-blue": "#546179",
        "-blue-300": "#1D293F",
        "-yellow-200": "#FEF2DE",
        "-yellow": "#F5A623",
      },
    },
  },
  plugins: [],
};
