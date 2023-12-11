import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    chromeWebSecurity: false,
    specPattern: 'tests/e2e/**/*.spec.*',
    supportFile: false,
    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor())
    },
  },
})
