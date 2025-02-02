class LoginPage {
    // Локатори
    usernameInput = $('#user-name');
    passwordInput = $('#password');
    loginButton = $('#login-button');
    errorMessage = $('[data-test="error"]');

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