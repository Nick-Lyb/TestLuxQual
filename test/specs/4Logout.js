const { browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');

describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {

        await browser.url('https://www.saucedemo.com');

        await LoginPage.login('standard_user', 'secret_sauce');

        await browser.pause(5000);

    });

    it('should open burger menu', async () => {

        await browser.$('#react-burger-menu-btn').click();

        await browser.$('#logout_sidebar_link').click();

        await browser.pause(1000);
    });
});