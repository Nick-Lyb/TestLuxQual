const loginPage = require('../pageobjects/login.page');

describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });
});