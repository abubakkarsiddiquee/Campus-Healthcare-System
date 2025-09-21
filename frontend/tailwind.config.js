// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        'primary-brand': '#FF5733',
        'secondary-accent': '#C70039',
      },
    },
  },
  plugins: [],
}
