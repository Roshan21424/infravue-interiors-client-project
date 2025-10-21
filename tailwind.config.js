/**   @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        dancing: ["'Dancing Script'", "cursive"],
        economica: ["Economica", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        saira: ["'Saira Stencil One'", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
        cormorant: ['Cormorant Garamond', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
        economica: ['Economica', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
        tinos: ['Tinos', 'serif'],
      },
    },
  },
  plugins: [],
}