/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-light': '#fae8e7',
        'gold-dark': '#d4a762',
        'gold-light': 'rgba(212, 167, 98, 0.15)',
        'brown-dark': '#8d6e63',
        'brown-light': '#a0522d',
        'green-dark': '#4a5c4e',
        'green-medium': '#6f8072',
        'pink-light': '#f7dada',
        'red-400': '#e57373',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
