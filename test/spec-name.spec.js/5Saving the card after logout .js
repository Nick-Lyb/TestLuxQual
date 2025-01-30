const LoginPage = require('../pageobjects/login.page');

describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {
        await browser.url('https://www.saucedemo.com');
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('Add to cart, click burger, logout', async () => {
        await browser.$('#add-to-cart-sauce-labs-backpack').click();
        await browser.$('#react-burger-menu-btn').click();
        await browser.$('#logout_sidebar_link').click();
    })
    
    it ('logging, click cart', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await browser.$('#shopping_cart_container').click();
    })
        
});
