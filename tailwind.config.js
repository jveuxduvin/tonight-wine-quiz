/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f4e8d1",
        ink: "#f4e8d1",
        grape: "#8e263a",
        rose: "#c88b78",
        cork: "#b89464",
        leaf: "#7f8d76",
        butter: "#d7bd78",
        skywash: "#9db3bd",
        navy: "#010714",
        midnight: "#06142a",
        ivory: "#f4e8d1",
        pewter: "#9aa6b2"
      },
      boxShadow: {
        sketch: "0 22px 60px rgba(0, 0, 0, 0.34)",
        soft: "0 18px 45px rgba(0, 0, 0, 0.28)"
      },
      fontFamily: {
        sketch: [
          "Didot",
          "Bodoni 72",
          "Georgia",
          "Times New Roman",
          "serif"
        ],
        body: [
          "Optima",
          "Avenir Next",
          "system-ui",
          "sans-serif"
        ],
      }
    }
  },
  plugins: []
};
