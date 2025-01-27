const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage {
    // Selectors
    get usernameField() { return $('#user-name'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('#login-button'); }

    // Actions
    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();