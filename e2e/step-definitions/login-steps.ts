import {Given} from 'cucumber';
import {browser} from 'protractor';

Given('User will login into application', () => {
  console.log("************** SUCCESS ********************");
  //return browser.get('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
  return browser.get('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
});

