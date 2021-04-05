// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Open Sans Condensed", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      abcdheading: ["Syne Mono", "Georgia"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "about-smile": "url('/smile.jpg')",
        "strand": "url('/strand.jpg')",
        "woman": "url('/abcd1.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
