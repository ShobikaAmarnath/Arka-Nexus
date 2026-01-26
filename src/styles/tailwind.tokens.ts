export const tokens = {
  colors: {
    brand: {
      primary: "#f97316",
      secondary: "#ea580c",
      dark: "#000000",
      "primary-blue": "#031a42",
      accent: "#e88011",
      "deep-navy": "#00001d",
    },
    neutral: {
      white: "#ffffff",
      offWhite: "rgba(255, 255, 255, 0.95)",
      light: "#F1F5F9",
      textMain: "#374151",
      textMuted: "#a0aec0",
      border: "rgba(0, 0, 0, 0.1)",
    },
    status: {
      success: "#16a34a",
      error: "#dc2626",
    },
  },
  spacing: {
    "nav-h": "80px",
    "nav-h-scroll": "70px",
    "container-max": "1400px",
    "mega-menu-w": "1000px",
    "safe-x": "2rem",
    "dropdown-gap": "0.5rem",
    "card-gap": "1.5rem",
    "section-y": "2.5rem", // Vertical padding for all sections
    "content-gap": "2rem", // Gap between related elements
    "grid-gap": "1.5rem", // Standard gap for grids
    "stack-gap": "1rem", // Small stack gap for headers/text
  },
  fontSize: {
    h1: ["2.1rem", { lineHeight: "1.2", fontWeight: "800" }], // Mobile: 40px
    h2: ["2rem", { lineHeight: "1.3", fontWeight: "700" }], // Mobile: 32px
    h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
    h4: ["1.25rem", { lineHeight: "1.5", fontWeight: "600" }],
    body: ["1.2rem", { lineHeight: "1.6" }],
    "body-sm": ["1rem", { lineHeight: "1.5" }],
    "nav-link": "1.1rem",
    "dropdown-link": "0.875rem",
    "mobile-link": "1.1rem",
  },
  borderRadius: {
    "nav-link": "6px",
    dropdown: "8px",
    mega: "12px",
    button: "25px",
    card: "12px",
  },
  shadows: {
    dropdown: "0 10px 25px rgba(0, 0, 0, 0.15)",
    mega: "0 20px 40px rgba(0, 0, 0, 0.15)",
    button: "0 4px 15px rgba(249, 115, 22, 0.3)",
    card: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
  },
};
