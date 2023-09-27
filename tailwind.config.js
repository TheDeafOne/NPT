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
        'text': {
          50: '#eff2f6',
          100: '#dfe5ec',
          200: '#bfcbd9',
          300: '#9fb1c6',
          400: '#7e96b4',
          500: '#5e7ca1',
          600: '#4b6381',
          700: '#394b60',
          800: '#263240',
          900: '#131920',
          950: '#090c10',
        },
        'background': {
          50: '#f5f0f5',
          100: '#ebe0eb',
          200: '#d6c2d6',
          300: '#c2a3c2',
          400: '#ad85ad',
          500: '#996699',
          600: '#7a527a',
          700: '#5c3d5c',
          800: '#3d293d',
          900: '#1f141f',
          950: '#0f0a0f',
        },
        'primary': {
          50: '#eff2f5',
          100: '#dfe6ec',
          200: '#bfccd9',
          300: '#9fb3c6',
          400: '#809ab3',
          500: '#60819f',
          600: '#4d6780',
          700: '#394d60',
          800: '#263340',
          900: '#131a20',
          950: '#0a0d10',
        },
        'secondary': {
          50: '#eef2f7',
          100: '#dde6ee',
          200: '#bbcddd',
          300: '#98b3cd',
          400: '#769abc',
          500: '#5481ab',
          600: '#436789',
          700: '#324d67',
          800: '#223444',
          900: '#111a22',
          950: '#080d11',
        },
        'accent': {
          50: '#eff2f6',
          100: '#dfe6ec',
          200: '#bfccd9',
          300: '#9fb2c6',
          400: '#7e99b4',
          500: '#5e7fa1',
          600: '#4b6681',
          700: '#394c60',
          800: '#263340',
          900: '#131920',
          950: '#090d10',
        },
      },
      // colors: {
      //   'text': '#e9edf2',
      //   'background': '#030203',
      //   'primary': '#bccad7',
      //   'secondary': {
      //     100: '#141f29',
      //     200: '#1c2a36'
      //   },
      //   'accent': '#577694',
      //  },
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
