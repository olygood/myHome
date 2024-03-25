import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-yellow':'#FCF3CA',
        'color-red':' #EF7B7B',
        'color-green':'#C4EADA',
        'blue-steam': '#67c1f5',
        'white-steam-a': '#c6d4df',
        'white-steam-b': '#8f98a0',
        'black-steam': '#282b31',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
