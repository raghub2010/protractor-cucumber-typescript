import { ElementFinder, element, by } from "protractor";
import {Log4JsConfig as logger} from '../config/log4js-config';


export class LoginPage {
    private usernameEle: ElementFinder = element(by.id('username'));
    private passwordEle: ElementFinder = element(by.id('password'));
    private loginButtonEle: ElementFinder = element(by.buttonText('Sign in'));
    private loggedInMsgTextEle: ElementFinder = element(by.css('p[ng-if="correctMessage"]'));


    public enterUsername(username: string) {
       logger.log().debug("Entering user name");
        return this.usernameEle.sendKeys(username);
    }

    public enterPassword(password: string) {
        return this.passwordEle.sendKeys(password);
    }

    public clickOnLoginButton() {
        return this.loginButtonEle.click();
    }
    public getLogggedInMessageText() {
        return this.loggedInMsgTextEle.getText();
    }

}