const { browser } = require('@wdio/globals')
const LoginPage = require('../../pageobjects/login.page');
const { GetRandomString } = require('../../pageobjects/randomUtil');

describe('InvalidPass', () => {
    it('valid login invalid pass', async () => {
        //Navigating to login page
        await browser.url('https://www.saucedemo.com');

        //Logging in
        await LoginPage.login('standard_user', (GetRandomString(10)));

        //Waiting
        await browser.pause(5000);

    });
});
