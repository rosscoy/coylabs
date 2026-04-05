/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:  { DEFAULT: '#C96A2A', hover: '#A3531F' },
        surface: '#FFFFFF',
        warm:    '#FAFAF8',
        border:  '#E7E5E0',
        tagbg:   '#F5F4F0',
        ink:     '#1A1A1A',
        muted:   '#6B7280',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
