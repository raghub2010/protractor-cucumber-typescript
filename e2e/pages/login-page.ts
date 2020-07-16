import { ElementFinder, element, by } from "protractor";


export class LoginPage {
    private usernameEle: ElementFinder = element(by.id('username'));
    private passwordEle: ElementFinder = element(by.id('password'));


    public enterUsername(username: string) {
        return this.usernameEle.sendKeys(username);
    }

    public enterPassword(password: string) {
        return this.passwordEle.sendKeys(password);
    }
}