import { defineConfig } from "cypress";
import { assetsFolder, baseUrl, defaultWaitingTime } from "./cypress/support/constants/constants";
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.ts",
    baseUrl,
    defaultCommandTimeout: defaultWaitingTime * 5,
    supportFile: "cypress/support/index.ts",
    videosFolder:`${assetsFolder}/videos`,
    downloadsFolder: `${assetsFolder}/downloads`,
    screenshotsFolder: `${assetsFolder}/screenshots`,
    fixturesFolder: `cypress/fixtures`,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
  },
  env: {
    allure: "true",
    allureResultsPath: "cypress/assets/allure-results"
  }
  },
  "viewportWidth": 1600,
  "viewportHeight": 1600
});
