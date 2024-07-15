import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')



const config: Config =withMT( {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      colors:{
        ...colors,
      }
    }
  },
  plugins: [],
});
export default config;
