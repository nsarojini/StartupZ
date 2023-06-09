/** @type {import('tailwindcss').Config} */
module.exports = {
  
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        animation: {
          blob: "blob 7s infinite",
        },
        keyframes: {
          blob: {
            "0%": {
              transform: "translate(0px, 10px) scale(1)",
            },
            "33%": {
              transform: "translate(30px, -50px) scale(1.1)",
            },
            "66%": {
              transform: "translate(-20px, 40px) scale(0.9)",
            },
            "100%": {
              transform: "tranlate(10px, 0px) scale(1)",
            },
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };