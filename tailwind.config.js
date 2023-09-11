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
        'app-purple': '#D785F4',
        'app-blue': '#7180FF',
        'app-red': '#FC9F9A',
        'app-white': '#FDFDFF',
        'app-black': '#616161',
        'app-dark': '#272829',
      },
      width: {
        '335-px': '335px',
        '0.9': '90%'
      },
      minWidth: {
        '60-px': '60px'
      },
      maxHeight: {
        '118-px': '118px'
      },
      minHeight: {
        '120-px': '120px',
        '200-px': '200px',
        '250-px': '250px'
      },
      margin: {
        '84': '21rem'
      },
      screens: {
        'csm1': '425px',
        'csm2': '530px',
        'cmd1': '620px',
        'clg1': '950px'
        // => @media (min-width: 576px) { ... }
      },
      fontSize: {
        'csm1': '0.25rem'
      }
    },
  },
  plugins: [],
}
