const LoginPage = require('../pageobjects/login.page');

describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {
        await browser.url('https://www.saucedemo.com');
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('cheackout without products', async () => {
        await browser.$('#shopping_cart_container').click();
        const cartItems = await browser.$$('.cart_item');
        if (cartItems.length === 0) {
            
            throw new Error('Error: cart is empty');
        } else {
            await browser.$('#checkout').click();
        }
    })
});