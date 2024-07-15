const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.grupomedcof.com.br',
    env: {
      cadastroURL: 'https://login.medcof.com.br/'
    },
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});