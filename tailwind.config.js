module.exports = {
  content: ["./src/**"],
  theme: {
    extend: {
      animation: {
        "scale-up": "scaleUp 1s ease-out forwards", // Custom animation
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(3)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
