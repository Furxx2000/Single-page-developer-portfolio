/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'deep-black': '#151515',
      'light-black': '#242424',
      'primary-green': '#4EE1A0',
      'error-red': '#FF6F58',
      gray: '#D9D9D9',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['"Space Grotesk"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
