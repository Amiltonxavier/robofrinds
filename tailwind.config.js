/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'robos-gradient': 'linear-gradient(to left, rgba(7, 27, 82, 1) 0%, rgba(0, 128, 128, 1) 100%)',
      },
      backgroundColor: {
        "light-green": '#9EEBCF'
      },
      colors: {
        'light-green': '#9EEBCF'
      }
    },
  },
  plugins: [],
}