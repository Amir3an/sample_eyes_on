module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Your desired shadow
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-custom": {
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
      });
    },
  ],
};
