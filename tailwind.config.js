/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text': '#f4f6f5',
        'background': '#121715',
        'primary-button': '#b5cab4',
        'secondary-button': '#f3fcf6',
        'accent': '#b5cab4',
      },
      fontFamily: {
        lato: [
          '"Lato"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]
      },
      animation: {
        'slide-out': 'slide-out 2s linear forwards',
      },
      keyframes: {
        'slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      gridTemplateColumns: {
        'repeat': 'repeat(25, 1fr)'
      },
      gridTemplateRows: {
        'repeat': 'repeat(13, 1fr)'
      }
    },

  },
  plugins: [],
}
