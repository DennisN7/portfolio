/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DC2626',
        secondary: '#991B1B',
        darker: '#0A0A0A',
        light: '#FFFFFF',
        'red-accent': '#7F1D1D',
      },
    },
  },
  plugins: [],
}
