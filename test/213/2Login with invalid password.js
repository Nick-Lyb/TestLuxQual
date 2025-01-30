const loginPage = require('../pageobjects/login.page');
const { GetRandomString } = require('../pageobjects/randomUtil');

describe('InvalidPass', () => {
    it('valid login invalid pass', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', (GetRandomString(10)));
    });
});
