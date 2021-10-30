// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trainPink: "#ffd7f5",
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
