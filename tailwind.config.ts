import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lit: "#83f52c",
        unlit: "#1A1A1A"
      },
      spacing: {
        segmentWidth: "3.125rem",
        segmentHeight: ".625rem",
        halfSegment: "1.5625rem"
      },
      rotate: {
        "30": "60deg"
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /top-+/
    },
    {
      pattern: /left-+/
    },
    { pattern: /rotate-+/ }
  ]
};
export default config;
