import type {Config} from 'tailwindcss'
import preset  from '../../tailwind-theming/preset'
const config = {
  presets:[preset],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
	],
} satisfies Config

export default config