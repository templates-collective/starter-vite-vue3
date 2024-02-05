import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

// Cypress config.
// https://docs.cypress.io/guides/references/configuration
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1977',
    chromeWebSecurity: false,
    specPattern: 'tests/e2e/**/*.spec.*',
    supportFile: false,
    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor())
    },
  },
})
