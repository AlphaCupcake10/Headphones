/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text': '#f6ebe9',
        'background': '#000000',
        'primary': '#922828',
      }
    },
  },
  plugins: [],
}

