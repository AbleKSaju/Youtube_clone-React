import colors from 'tailwindCss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary:{
          DEFAULT:colors.neutral[200],
          hover:colors.neutral[200],
          border:colors.neutral[200],
          text:colors.neutral[200],
          dark:colors.neutral[200],
          ["dark-hover"]:colors.neutral[200],
        },
      }
    },
  },
  plugins: [],
}