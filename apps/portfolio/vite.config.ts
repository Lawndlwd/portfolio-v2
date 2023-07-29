/// <reference types="vitest" />
import { defineConfig, createLogger } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const logger = createLogger()
const originalWarning = logger.warn
logger.warn = (msg, options) => {
  if (msg.includes('The above dynamic import cannot be analyzed by Vite'))
    return
  originalWarning(msg, options)
}
export default defineConfig({
  customLogger: logger,
  cacheDir: '../../node_modules/.vite/portfolio',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../..',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
