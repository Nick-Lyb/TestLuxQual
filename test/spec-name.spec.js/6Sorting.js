const LoginPage = require('../pageobjects/login.page');

describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {
        await browser.url('https://www.saucedemo.com');
        await LoginPage.login('standard_user', 'secret_sauce');
    });
});

describe('Sorting za lohi hilo az', () => {
    it('should sort products', async () => {
        await browser.$('#header_container').click();
        await browser.$('option[value="za"]').click();

        await browser.$('#header_container').click();
        await browser.$('option[value="lohi"]').click();

        await browser.$('#header_container').click();
        await browser.$('option[value="hilo"]').click();
        
        await browser.$('#header_container').click();
        await browser.$('option[value="za"]').click();
    });
});

