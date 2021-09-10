import { Selector, t } from 'testcafe'

class LoginPage {
    constructor(){
        this.usernameInput = Selector('[data-test="username"]')
        this.passwordInput = Selector('[data-test="password"]')
        this.loginSubmitButton = Selector('[data-test="login-button"]')
    }

    async submitLoginForm(username, password){
        await t
        .typeText(this.usernameInput, username)
        .typeText(this.passwordInput, password)
        .click(this.loginSubmitButton)
    }

}

export default new LoginPage