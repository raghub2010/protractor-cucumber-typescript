
const path = require('path');
var reporter = require('cucumber-html-reporter');

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
    require: ['./e2e/**/*steps.ts', './e2e/**/*.ts'], // loads step definitions
    format: 'json:temp/results.json',               // enable console output
    tags : ["@sanity"]
  },
  onPrepare() {
    require('ts-node').register({
      project: 'tsconfig.json' //enable typescript
    });
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  },
  onComplete() {
    var options = {
      theme: 'bootstrap',
      jsonFile: 'temp/results.json',
      output: 'temp/cucumber_report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
          "App Version":"0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
      }
  };
  
  reporter.generate(options);
  }
};
