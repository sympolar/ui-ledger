/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zengine: {
          navy: {
            900: "#0E2A47",
            800: "#12395C",
            700: "#164A73",
          },
          cyan: {
            100: "#CFEFFB",
            200: "#A8DFF5",
            300: "#7CC8E8",
            400: "#4FAED6",
            500: "#2D93C2",
          },
          deep: {
            600: "#1F6F99",
            700: "#155A7C",
          },
          bg: {
            dark: "#081826",
            mid: "#0F243A",
            light: "#F4FAFD",
          }
        }
      },

      backgroundImage: {
        "zengine-gradient-primary":
          "linear-gradient(180deg, #A8DFF5 0%, #4FAED6 55%, #1F6F99 100%)",

        "zengine-gradient-dark":
          "linear-gradient(180deg, #164A73 0%, #0E2A47 100%)",
      },

      boxShadow: {
        "zengine-glow-soft": "0 0 20px rgba(79, 174, 214, 0.35)",
        "zengine-glow-strong": "0 0 30px rgba(79, 174, 214, 0.6)",
      },

      borderRadius: {
        xl2: "18px",
      },

      fontFamily: {
        primary: ["Inter", "sans-serif"],
        tech: ["Orbitron", "sans-serif"],
      }
    },
  },
  plugins: [],
}
