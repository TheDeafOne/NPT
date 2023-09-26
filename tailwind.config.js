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
        'gradient-movement': 'gradient-animation 8s linear infinite',
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
        'text': '#e9edf2',
        'background': '#030203',
        'primary': '#bccad7',
        'secondary': '#141f29',
        'accent': '#577694',
       },
      // colors: {
      //   'text': '#e0e8f0',
      //   'background': '#0a0f15',
      //   'primary': '#628ab2',
      //   'secondary': '#141f29',
      //   'accent': '#5b85ae',
      //  },
      // colors: {
      //   'text': '#101623',
      //   'background': '#edf1f7',
      //   'primary': '#6481b9',
      //   'secondary': '#d8dfee',
      //   'accent': '#4d6dac',
      //  },
      // colors: {
      //   'text': '#000000',
      //   'background': '#f4f5fb',
      //   'primary': '#a1acd9',
      //   'secondary': '#c5cce7',
      //   'accent': '#41549f',
      //  },
    

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
    },

  },
  plugins: [],
}
