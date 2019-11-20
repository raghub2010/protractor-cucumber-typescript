
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'firefox'
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./e2e/**/*steps.ts'], // loads step definitions
    format: 'json: e2e-output.txt',               // enable console output
    tags : ["@sanity"]
  },
  onPrepare() {
    require('ts-node').register({
      project: 'tsconfig.json' //enable typescript
    });
    browser.ignoreSynchronization = true;
  }
};