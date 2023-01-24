// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-blue": "hsl(228, 39%, 23%)",
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "v-dark-blue": "hsl(233, 12%, 13%)",
        "v-pale-red": "hsl(13, 100%, 96%)",
        "v-light-gray": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
