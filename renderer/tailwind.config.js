const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './renderer/src/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/src/components/**/*.{js,ts,jsx,tsx}',
    './renderer/src/layout/**/*.{js,ts,jsx,tsx}',
    './renderer/src/screens/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    animation: {
      'spin-slow': 'spin 0.8s ease-in-out infinite',
    },
    keyFrames: {
      'spin-slow': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },

      }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      dark: "#000",
      black: "#23272A",
      "purple": "	#7289da",
      "black-900": "#1e2124",
      "black-800": "	#282b30",
      "black-700": "#36393e",
      "black-600": "#424549",
      green: {
        light: "#57F287",
        DEFAULT: "rgb(80, 163, 97)",
      },
      yellow: "#FEE75C",
      red: "#ED4245",

    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
