const { browser } = require('@wdio/globals')
const LoginPage = require('./pageobjects/login.page');

describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {
        //Navigating to login page
        await browser.url('https://www.saucedemo.com');
        
        //Logging in
        await LoginPage.login('standard_user', 'secret_sauce');
        
        //Waiting
        await browser.pause(5000);

    });

    it('Add to cart, click burger, logout', async () => {

        //Add to cart
        await browser.$('#add-to-cart-sauce-labs-backpack').click();

        //Waiting
        await browser.pause(5000);

        //Click burger
        await browser.$('#react-burger-menu-btn').click();

        //waiting
        await browser.pause(5000);

        //Logout
        await browser.$('#logout_sidebar_link').click();
    })
});