/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["inter", "sans-serif"],
      inconsolata: ["inconsolata", "sans-serif"],
      lora: ["lora", "sans-serif"],
      opensans: ["opensans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

// @font-face {
//   font-family: "Inter";
//   src: url("../../public/fonts/inter/Inter-VariableFont_slnt\,wght.ttf")
//     format("woff2-variations");
//   font-weight: 100 900;
// }

// @font-face {
//   font-family: "Inconsolata";
//   src: url("../../public/fonts/inconsolata/Inconsolata-VariableFont_wdth\,wght.ttf")
//     format("woff2-variations");
//   font-weight: 100 900;
// }

// @font-face {
//   font-family: "Lora";
//   src: url("../../public/fonts/lora/Lora-VariableFont_wght.ttf")
//     format("woff2-variations");
//   font-weight: 100 900;
// }

// @font-face {
//   font-family: "OpenSans";
//   src: url("../../public/fonts/sans/OpenSans-VariableFont_wdth\,wght.ttf")
//     format("woff2-variations");
//   font-weight: 100 900;
// }
