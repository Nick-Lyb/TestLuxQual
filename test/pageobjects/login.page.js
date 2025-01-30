class loginPage {
    // Selectors
    get usernameField() { return $('#user-name'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('#login-button'); }

    // Actions
    async open() {
        await browser.url('https://www.saucedemo.com');
    }
    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new loginPage();