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
        bOne: { max: "1000px" },
        bTwo: { max: "902px" },
        bThree: { max: "750px" },
        bFour: { max: "600px" },
        bFive: { max: "500px" },
        bFivePFive: { max: "450px" },
        bFourSevenFive: { max: "350px" },
        bSix: { max: "300px" },
      },
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
