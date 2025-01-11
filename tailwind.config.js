/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {primary: '#000000', secondary: '#ffffff', accent: 'dark:border-gray-700 dark:bg-opacity-70 dark:bg-gray-700 dark:hover:bg-opacity-80 '},
            fontFamily: {}},
  },
  plugins: [],
}

