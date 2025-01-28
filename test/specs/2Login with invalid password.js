const { browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');
const { GetRandomString } = require('../pageobjects/randomUtil');

describe('InvalidPass', () => {
    it('valid login invalid pass', async () => {

        await browser.url('https://www.saucedemo.com');

        await LoginPage.login('standard_user', (GetRandomString(10)));

        await browser.pause(1000);

    });
});
