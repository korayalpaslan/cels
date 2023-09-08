/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero.jpg')",
      },
      colors: {
        primary: "#0f0f0f",
        lightSecondary:'#ff0000d9',
        midSecondary:"#b90a09d9",
        darkSecondary:"#780c09d9", 
        light:"#F4F0EA"
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif:['Cormorant Garamond', 'serif'],
    },
  },
  plugins: [],
}
