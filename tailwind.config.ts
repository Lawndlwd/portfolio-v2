import { shadcnPlugin } from './src/lib/shadcn-plugin'
import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [shadcnPlugin],
} satisfies Config

export default config
