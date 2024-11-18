/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#1389f2',
      },
      fontFamily: {
        fozil: ['DinPro', 'sans-serif'],
      },
      screens: {
        'mobile': { max: '600px' },
        'tablet': { max: '900px' },
      },
    },
  },
  plugins: [],
};
