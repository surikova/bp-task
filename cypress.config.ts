import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    baseUrl: 'http://app.baupal.de/',
    experimentalWebKitSupport: true,
  },

  env: {
    signup_url: '/welcome',
  }
});
