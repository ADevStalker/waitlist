/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#F2F2F2',
        grayBackground: '#F7F7F7',
        black: '#000',
        activeButton: '#323832',
        primary: '#f4c64a',
        white: 'white',
      },
      borderRadius: {
        DEFAULT: '21px',
        sm: '8px',
      },
    },
  },
  plugins: [],
};
