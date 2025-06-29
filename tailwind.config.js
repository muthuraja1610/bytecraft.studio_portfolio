export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: '#39FF14'
      },
      backgroundImage: {
        'logo-watermark': "url('/logo.png')"
      }
    },
  },
  plugins: [],
}