
const report = require('multiple-cucumber-html-reporter');
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
    format: 'json:.tmp/results.json',               // enable console output
    tags : ["@sanity"]
  },
  onPrepare() {
    require('ts-node').register({
      project: 'tsconfig.json' //enable typescript
    });
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options:{
        // read the options part for more options
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        browser : {
          name : 'firefox',
          version : '74'
        },
        device : 'Local machine',
        platform : {
          name : 'Windows',
          version : '10'
        },
        customData: {
          title : 'protrctor-cucumber-typescript',
          data : [
            {label: 'Project', value: 'PROTRACTOR-CUCUMBER-TYPESCRIPT FRAMEWORK'},
            {label: 'Release', value : '1.0.0'},
            {label: 'Start Time', value: new Date()},
            {label: 'End Time', value: new Date()}
          ]
        },
        metadata: [
          {name: 'Device', value: 'Localhost'},
          {name: 'OS', value: 'Windows 10'}
      ]

    }
}]
};
