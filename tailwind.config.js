module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       "main-orange": "hsl(26, 100%, 55%)",
       "second-orange": "hsl(25, 100%, 94%)",
       "headers-hovers": "hsl(220, 13%, 13%)",
       "default": "hsl(219, 9%, 45%)",
       "img-active": "hsl(223, 64%, 98%)",
      },
      screens: {
        "small": {"max": "1023.9px"},
         "md":"900px",
      }
    },
  },
  plugins: [],
}