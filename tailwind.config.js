/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pluk-bg':      '#1F0802',
        'pluk-main':    '#1C646D',
        'pluk-light':   '#CEF09D',
        'pluk-accent':  '#38184C',
        'pluk-hover':   '#A0CD60',
      },
      fontFamily: {
        heading: ['"Unbounded SemiExpanded"', 'sans-serif'],
        body:    ['"Fira Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}