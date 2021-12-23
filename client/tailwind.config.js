// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      whiteGlow: "0px 2.5px 15px rgba(254, 254, 254, .4)",
    },
    extend: {
      screens: {
        b1000: { max: "1000px" },
        b902: { max: "902px" },
        b750: { max: "750px" },
        b600: { max: "600px" },
        b500: { max: "500px" },
        b450: { max: "450px" },
        b350: { max: "350px" },
        b300: { max: "300px" },
      },
      height: {
        screenMinusHeader: "calc(100vh - 56px)",
      },
      colors: {
        trainBlue: "#004c91",
        trainBlueOpacity: "rgba(0, 76, 145, 0.9)",
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
