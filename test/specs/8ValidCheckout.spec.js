const inventoryPage = require('../pageobjects/inventory.page');
const checkoutPage = require('../pageobjects/checkout.page');
describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {
        await inventoryPage.open();
    });

    it('add to cart, cart, checkout, fname, sname, postal, continue, finish, back', async () => {
        await inventoryPage.addToCart();
        await inventoryPage.shoppingCart();
        await checkoutPage.checkoutButton.click();

        await checkoutPage.finLanPoco();

        await checkoutPage.continue();
        await checkoutPage.finish();
        await checkoutPage.back();
    });
});