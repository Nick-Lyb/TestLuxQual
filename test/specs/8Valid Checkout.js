const { browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');

describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {

        await browser.url('https://www.saucedemo.com');

        await LoginPage.login('standard_user', 'secret_sauce');

    });

    it('add to cart, cart, checkout, fname, sname, postal, continue, finish, back', async () => {
    
        await browser.$('#add-to-cart-sauce-labs-backpack').click();
        
        await browser.$('a[class="shopping_cart_link"]').click();

        await browser.$('#checkout').click();

        await browser.$('#first-name').setValue('John');

        await browser.$('#last-name').setValue('Doe');

        await browser.$('#postal-code').setValue('12345');

        await browser.$('#continue').click();

        await browser.$('#finish').click();

        await browser.$('#back-to-products').click();

        await browser.pause(1000);
    });
});