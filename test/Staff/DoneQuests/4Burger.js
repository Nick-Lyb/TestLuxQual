const { browser } = require('@wdio/globals')
const LoginPage = require('../../pageobjects/login.page');

describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {
        console.log('Navigating to login page...');
        await browser.url('https://www.saucedemo.com');

        console.log('Logging in...');
        await LoginPage.login('standard_user', 'secret_sauce');

        //Waiting
        await browser.pause(5000);

    });

    it('should open burger menu', async () => {
        //Click burger
        await browser.$('#react-burger-menu-btn').click();

        await browser.$('#logout_sidebar_link').click();

        await browser.pause(5000);
    });
});