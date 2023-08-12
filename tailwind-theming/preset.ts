import type {Config} from 'tailwindcss'
// @ts-expect-error no typr
import  tailwindcssAnimate from 'tailwindcss-animate'
import {tailwindPlugin} from './plugin'

const preset = { 
  darkMode: ["class"],
  content:[    "../packages/ui/**/*.{js,ts,jsx,tsx}",
  "./**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",],
  plugins: [tailwindcssAnimate,tailwindPlugin],
} satisfies Config

export default preset