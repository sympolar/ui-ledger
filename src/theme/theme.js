const theme = {
  meta: {
    name: "Zengine",
    aesthetic: "Cold-tech cyan gradient minimalism",
    version: "1.0.0",
  },

  colors: {
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
    deepCyan: {
      600: "#1F6F99",
      700: "#155A7C",
    },
    background: {
      dark: "#081826",
      mid: "#0F243A",
      light: "#F4FAFD",
    },
  },

  gradients: {
    primaryVertical: `
      linear-gradient(
        180deg,
        #A8DFF5 0%,
        #4FAED6 55%,
        #1F6F99 100%
      )
    `,
    darkVertical: `
      linear-gradient(
        180deg,
        #164A73 0%,
        #0E2A47 100%
      )
    `,
  },

  effects: {
    glowSoft: "0 0 20px rgba(79, 174, 214, 0.35)",
    glowStrong: "0 0 30px rgba(79, 174, 214, 0.6)",
  },

  borders: {
    strong: "3px solid #12395C",
    subtle: "1px solid rgba(20, 74, 115, 0.25)",
  },

  radius: {
    standard: "14px",
    large: "18px",
  },

  typography: {
    primary: "'Inter', sans-serif",
    tech: "'Orbitron', sans-serif",
  },
};

export default theme;
