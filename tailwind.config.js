/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mt: {
          950: '#080E12',
          900: '#0B1520',
          800: '#132028',
          700: '#1C2E3A',
          600: '#253B4A',
          500: '#304858',
          400: '#4A6270',
          300: '#6A8490',
          200: '#94ACBA',
          100: '#C2D0D8',
          50:  '#E6EDE8',
        },
        rail: {
          DEFAULT: '#D4933A',
          light:   '#F2B84B',
          dark:    '#8B6020',
          muted:   '#5C3E10',
        },
        contour: {
          DEFAULT: '#A06848',
          light:   '#C49070',
          dark:    '#6B3E28',
        },
        alpine: {
          DEFAULT: '#4A6E42',
          light:   '#6A9260',
          dark:    '#2E4428',
        },
        water: {
          DEFAULT: '#2F7090',
          light:   '#4A90B0',
          dark:    '#1C4E68',
        },
      },
      fontFamily: {
        sans: ['"Barlow"', 'system-ui', 'sans-serif'],
        cond: ['"Barlow Condensed"', '"Arial Narrow"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

