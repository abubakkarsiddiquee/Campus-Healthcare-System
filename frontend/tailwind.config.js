// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        'uiu-orange': '#FF6600',
        'uiu-dark': '#CC5200',
        'uiu-light': '#FFE5D1',
        'uiu-gray': '#333333',
      },
    },
  },
  plugins: [],
}
