const { browser } = require('@wdio/globals')
const LoginPage = require('../../pageobjects/login.page');

describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {
        //Navigating to login page
        await browser.url('https://www.saucedemo.com');

        //Logging in
        await LoginPage.login('standard_user', 'secret_sauce');

        //Waiting
        await browser.pause(5000);

    });
});