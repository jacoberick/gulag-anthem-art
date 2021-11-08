// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      whiteGlow: "0px 2.5px 15px rgba(254, 254, 254, .4)",
    },
    extend: {
      height: {
        screenMinusHeader: "calc(100vh - 56px)",
      },
      colors: {
        trainBlue: "#004c91",
        black: "#121212",
        white: "#fefefe",
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
