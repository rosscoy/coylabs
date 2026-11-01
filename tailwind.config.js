/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:  { DEFAULT: '#00C8FF', hover: '#33D4FF' },
        surface: '#172534',
        warm:    '#0E1B2A',
        border:  '#223344',
        tagbg:   '#1A2D40',
        ink:     '#E8F4FF',
        muted:   '#7895A8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
