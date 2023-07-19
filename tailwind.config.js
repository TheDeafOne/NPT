const { ClientReferenceManifestPlugin } = require('next/dist/build/webpack/plugins/flight-manifest-plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'gradient-animation': {
          '0%': {
            backgroundPosition: '0%',
          },
          '100%': {
            backgroundPosition: '200%',
          },
        },

      },
      animation: {
        'gradient-movement': 'gradient-animation 10s linear infinite',
      },
      backgroundSize: {
        '200': '200%'
      },
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
        'primary': '#1A3511'
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
