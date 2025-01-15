/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        grayishGreen: '#dad7cd',
        darkBrown: '#3e2c41',
        lightBeige: '#fefae0',
      },
    },
  },
  plugins: [],
};
