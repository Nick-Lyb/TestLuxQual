const { browser } = require('@wdio/globals')
const LoginPage = require('../../pageobjects/login.page');
const { GetRandomString } = require('../../pageobjects/randomUtil');

describe('InvalidPass', () => {
    it('valid login invalid pass', async () => {
        //Navigating to login page
        await browser.url('https://www.saucedemo.com');

        //Logging in
        await LoginPage.login((GetRandomString(10)), 'secret_sauce');

        //Waiting
        await browser.pause(5000);

    });
});