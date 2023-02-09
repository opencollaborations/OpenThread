/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./src/**/*.{html,jsx,js}'],
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
}
