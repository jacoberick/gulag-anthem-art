// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        screenMinusHeader: "calc(100vh - 56px)",
      },
      colors: {
        trainPink: "#ffd7f5",
        trainBlue: "#004c91",
        black: "#121212",
        bg: "#252525",
      },
      fontFamily: {
        jSans: ["Josefin Sans", "sans-serif"],
        zen: ["Zen Antique Soft", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
