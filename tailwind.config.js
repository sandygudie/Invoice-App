module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  important: true,
  darkMode: "class",
  theme: {
    colors: {
      primary: "hsla(252, 94%, 67% ,1 )",
      secondary: "hsl(233, 31% ,17%,1)",
      black: "hsla(0, 2%, 18%, 1)",
      lightblack: "hsla(0, 4% , 41% , 1)",
      white: "#ffffff",
      transparent: "transparent",
      success: "hsl(160, 67%, 52% ,1)",
      warning: "hsla(34 ,100% ,50%, 1)",
      error: "#dc2626",
      gray: {
        100: "hsla(240 ,27% ,98%, 1)",
        200: "hsl(231, 3%, 54%, 1)",
        300: "hsla(0, 0%, 60%, 0.2)",
      },
      pink: "hsl(0deg 80% 63%)",
    },
    extend: {
      backgroundColor: {
        skin: {
          fill: "var(--color-background)",
          input: "var(--color-input-background)",
        },
      },
      textColor: {
        base: "var(--color-text)",
      },
    },
  },
  plugins: [],
};
