/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'hero': ['Lazer84'],
        'inter-regular': ['Inter-Regular'],
        'inter-light': ['Inter-Light'],
        'inter-extraBold': ['Inter-ExtraBold'],
        'inter-bold': ['Inter-Bold']
      },
      colors: {
        'cust-black': '#101011',
        'cust-yellow': '#ffd300',
        'cust-yellow-hover': '#e5bd00',
        'cust-white': '#F2F3F3',
        'cust-green': '#81D449',
        'cust-blu': '#3B7CF3',
        'cust-red': '#EB4511',
      },
      screens: {
        'md': '915px',
        'camp': '800px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
