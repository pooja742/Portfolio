/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
  'skills-gradient': `
    linear-gradient(38.73deg, rgba(255, 105, 180, 0.15) 0%, rgba(255, 182, 193, 0) 50%),
    linear-gradient(141.27deg, rgba(255, 182, 193, 0) 50%, rgba(255, 105, 180, 0.15) 100%)
  `,
}

    },
  },

  plugins: [],
};
