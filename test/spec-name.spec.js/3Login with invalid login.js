const LoginPage = require('../pageobjects/login.page');
const { GetRandomString } = require('../pageobjects/randomUtil');

describe('InvalidPass', () => {
    it('valid login invalid pass', async () => {
        await browser.url('https://www.saucedemo.com');
        await LoginPage.login((GetRandomString(10)), 'secret_sauce');
    });
});