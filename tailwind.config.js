/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#dad7cd",
      },
      fontFamily: {
        "kings-regular": ['"Kings"', "serif"],
      },
    },
  },
  plugins: [],
};
