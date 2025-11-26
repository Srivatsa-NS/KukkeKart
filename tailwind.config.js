/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-amber-800',
    'bg-amber-50',
    'text-amber-800',
    'text-amber-50',
    'border-amber-800',
    'border-amber-50',
    'shadow-amber-950',
    'hover:bg-amber-800',
    'hover:bg-amber-50',
    'hover:text-amber-800',
    'hover:text-amber-50',
    'hover:border-amber-800',
    'hover:border-amber-50',
    'hover:shadow-amber-800',
    'hover:shadow-amber-50',
  ]
}