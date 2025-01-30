const LoginPage = require('../pageobjects/login.page');

describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {
        await browser.url('https://www.saucedemo.com');
        await LoginPage.login('standard_user', 'secret_sauce');
    });
});