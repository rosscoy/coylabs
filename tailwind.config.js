/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:  { DEFAULT: '#05AD98', hover: '#048a7a' },
        surface: '#FFFFFF',
        warm:    '#F3F4F4',
        border:  '#BBBFBF',
        tagbg:   '#EAEBEB',
        ink:     '#1A1A1A',
        muted:   '#878787',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
