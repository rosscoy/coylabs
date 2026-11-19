/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:  { DEFAULT: '#00C8FF', hover: '#33D4FF', tint: '#003D52' },
        surface: '#172534',
        warm:    '#0E1B2A',
        border:  '#223344',
        tagbg:   '#1A2D40',
        ink:     '#E8F4FF',
        muted:   '#7895A8',
        footer:  { DEFAULT: '#091524', line: '#152233' },
        danger:  '#FF6B6B',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      // Motion tokens (see the site-polish playbook). DEFAULT means every
      // plain `transition-*` class picks up the site's curve and speed.
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(.22, 1, .36, 1)',
        out: 'cubic-bezier(.22, 1, .36, 1)',
        'in-out-soft': 'cubic-bezier(.65, 0, .35, 1)',
        spring: 'cubic-bezier(.34, 1.56, .64, 1)',
      },
      transitionDuration: {
        DEFAULT: '180ms',
        fast: '180ms',
        base: '400ms',
        slow: '700ms',
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        card: '0 1px 2px rgb(4 12 20 / 0.4), 0 8px 24px -12px rgb(4 12 20 / 0.6)',
        'card-hover': '0 2px 4px rgb(4 12 20 / 0.4), 0 20px 40px -16px rgb(4 12 20 / 0.8), 0 0 0 1px rgb(0 200 255 / 0.25)',
      },
    },
  },
  plugins: [],
}
