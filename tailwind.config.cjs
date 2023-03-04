/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT( {
 content: ['./src/**/*.{html,jsx,js}',"node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
 "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   colors: {
    white: '#F8F9FA',
    dark: '#343A40',
    shade: '#ADB5BD',
   },
   fontFamily: {
    logo: ['Itim', 'cursive'],
    roboto: ['Roboto', 'sans-serif'],
   },
  },
 },
 plugins: [],
})
