/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        softPink: "#F9B6B3",
        pink: "#F16578",
        beige: "#FEF8E2",
        white: "#FFFBEF",
      },
      fontFamily: {
        boohong: ["BooHong", "sans-serif"],
        leelawadee: ["Leelawadee", "sans-serif"],
      },
      backgroundImage: {
        newArrival: "url('../images/new_arrivall.jpg')",
        contact: "url('../images/contact.jpg')",
        location: "url('../images/lokasi.jpg')",
      },
    },
  },
  plugins: [],
};
