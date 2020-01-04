import {browser} from 'protractor';
import {binding, given, when, then} from 'cucumber-tsflow';
import {LoginPage} from './../pages/login-page';
import {HeaderPage} from './../pages/header-page';
import {setDefaultTimeout} from 'cucumber';
import {expect} from 'chai';

setDefaultTimeout(60*1000);

@binding()
export class LoginSteps {
  private loginPageObj = new LoginPage();
  private headerPageObj = new HeaderPage();

  @when('User will login into application with username as {string} and password as {string}')
  public async login(userName: string, password: string) {
    await this.loginPageObj.enterUsername(userName);
    await this.loginPageObj.enterPassword(password);
    await this.loginPageObj.clickOnLoginButton();
    await browser.sleep(4000);
  }

  @then('User will verify the logged in user is {string}')
  public async verifyLoggedInUser(expectedUserName: string) {
    let actualUsername = await this.headerPageObj.loggedInUserName();
    expect(actualUsername).to.equal(expectedUserName);
  }


}

