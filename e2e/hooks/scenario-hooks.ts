import { browser } from 'protractor';
import { HookScenarioResult } from 'cucumber';
const { Before, After } = require('cucumber');


After(async function(scenario: HookScenarioResult) {

    if(scenario.result.status == 'failed') {
        const ss = await browser.takeScreenshot();
        const img = Buffer.alloc(ss.length, ss, 'base64');
        this.attach(img, 'image/png');
    }
});