/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forestGreen: '#013220',
        deepSky: '#001B3F',
        starWhite: '#E0E8F9',
      },
      animation: {
        stars: 'twinkle 5s infinite',
        marquee: 'marquee 20s linear infinite',
        spin: 'spin linear infinite',
        pulse: 'pulse 2s infinite',
        appear: 'appear 0.5s ease-in-out',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

