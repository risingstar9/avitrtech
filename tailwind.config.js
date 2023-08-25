/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'circular': ['Circular Std', 'sans-serif'],
    }
  },
  plugins: [],
}
}

