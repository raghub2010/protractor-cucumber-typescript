import {browser} from 'protractor';
import {binding, when, then, given} from 'cucumber-tsflow';
import {LoginPage} from './../pages/login-page';
//import {HeaderPage} from './../pages/header-page';
import {setDefaultTimeout} from 'cucumber';
import {expect} from 'chai';

setDefaultTimeout(60*1000);

@binding()
export class LoginSteps {

    private loginPage = new LoginPage();
  
    @given('User will opens the application')
    public openLoginApp() {
        return browser.get('http://www.helpingtesters.com/practice/protractor/login.php');
    }

    @when('User will login into application with username as {string} and password as {string}')
    public async login(username: string, password: string) {
        await this.loginPage.enterUsername(username);
        await this.loginPage.enterPassword(password);
    }

    @then('User will verify {string} is logged in successfully')
    public async verifyLoggedInUser(expectedUsername: string) {
        await browser.sleep(5000);
        expect(await this.loginPage.getLogggedInMessageText()).to.contains(expectedUsername);
    }
}

