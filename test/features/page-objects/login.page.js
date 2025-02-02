// Локатори
const selectors = {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
    errorMessage: '[data-test="error"]'
};

class LoginPage {
    usernameInput = $(selectors.usernameInput);
    passwordInput = $(selectors.passwordInput);
    loginButton = $(selectors.loginButton);
    errorMessage = $(selectors.errorMessage);

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage();