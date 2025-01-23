/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#dad7cd",
        lightGray: "#f0ebd8",
        darkBrown: "#3e2c41",
        lightBeige: "#fefae0",
      },
      fontFamily: {
        "kings-regular": ['"Kings"', "serif"],
      },
      animation: {
        "infinite-scroll": "scroll 40s linear infinite",
        "fade-in": "fadeIn 2s ease-in-out",
        "slide-in": "slideIn 1.5s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
