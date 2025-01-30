const LoginPage = require('../pageobjects/login.page');

describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {
        await browser.url('https://www.saucedemo.com');
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('Footer links', async () => {
        await browser.$('a[href="https://twitter.com/saucelabs"]').click();
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');

        await browser.$('a[href="https://www.facebook.com/saucelabs"]').click();
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
        
        await browser.$('a[href="https://www.linkedin.com/company/sauce-labs/"]').click();
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
    });
});