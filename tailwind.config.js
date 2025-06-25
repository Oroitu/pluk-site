/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pluk-bg': '#1F0802',
        'pluk-main': '#1C646D',
        'pluk-light': '#CEF09D',
        'pluk-accent': '#38184C',
        'pluk-hover': '#A0CD60',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
