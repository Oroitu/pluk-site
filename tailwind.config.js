/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pluk-bg':      '#1F0802', // Amazon-Woman-3
        'pluk-main':    '#1C646D', // Amazon-Woman-2
        'pluk-light':   '#CEF09D', // Amazon-Woman-1
        'pluk-accent':  '#38184C', // Amazon-Woman-4
        'pluk-hover':   '#A0CD60', // Amazon-Woman-5
      },
      fontFamily: {
        heading: ['"Unbounded SemiExpanded"', 'sans-serif'],
        body:    ['"Fira Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
