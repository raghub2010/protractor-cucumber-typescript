
const path = require('path');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/**/*.feature'
  ],
  //Single browser settings
  capabilities: {
    'browserName': 'chrome'
  },
  //Multi browser settings
  /*multiCapabilities : [
    {
      browserName : 'chrome'
    },
    {
      browserName : 'firefox'
    }
  ],*/
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./e2e/**/*steps.ts'], // loads step definitions
    //format: 'json:.tmp/results.json',               // enable console output
    tags : ["@sanity"]
  },
  onPrepare() {
    require('ts-node').register({
      project: 'tsconfig.json' //enable typescript
    });
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  }
};
