const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobs' : '320px',
        'mobm' : '375px',
        'mobl' : '425px',
        ...defaultTheme.screens,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#e57a1c' //safety orange
      },
      fontFamily: {
        primary: ['Poppins'],
        secondary: ['"Open Sans"']
      }
    },
  },
  plugins: [
    // require("flowbite/plugin")
  ],
}
