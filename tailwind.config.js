/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fff6df",
        ink: "#30271f",
        grape: "#7c3f58",
        rose: "#e88b90",
        cork: "#c98d55",
        leaf: "#6b8b5a",
        butter: "#f5d36b",
        skywash: "#b8d8d8"
      },
      boxShadow: {
        sketch: "5px 6px 0 rgba(48, 39, 31, 0.16)",
        soft: "0 18px 45px rgba(48, 39, 31, 0.12)"
      },
      fontFamily: {
        sketch: [
          "ui-rounded",
          "Comic Sans MS",
          "Bradley Hand",
          "Trebuchet MS",
          "system-ui",
          "sans-serif"
        ],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
