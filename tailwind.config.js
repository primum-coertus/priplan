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
        'app-black': '#616161'
      },
      width: {
        '335-px': '335px'
      },
      maxHeight: {
        '118-px': '118px'
      },
      minHeight: {
        '200-px': '200px'
      }
    },
  },
  plugins: [],
}
