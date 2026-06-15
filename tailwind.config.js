/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08070d',
        'bg-raised': '#100e1a',
        ink: '#f1effb',
        'ink-dim': '#9a93bd',
        'ink-faint': '#5e5a7a',
        violet: '#8c7bff',
        teal: '#4fe3c9',
        amber: '#ffb36b',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
}