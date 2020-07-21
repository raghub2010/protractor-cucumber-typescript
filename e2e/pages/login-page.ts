import { ElementFinder, element, by } from "protractor";


export class LoginPage {
    private usernameEle: ElementFinder = element(by.id('username'));
    private passwordEle: ElementFinder = element(by.id('password'));
    private loggedInMsgTextEle: ElementFinder = element(by.css('p[ng-if="correctMessage"]'));


    public enterUsername(username: string) {
        return this.usernameEle.sendKeys(username);
    }

    public enterPassword(password: string) {
        return this.passwordEle.sendKeys(password);
    }

    public getLogggedInMessageText() {
        return this.loggedInMsgTextEle.getText();
    }

}