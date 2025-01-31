const inventoryPage = require('../pageobjects/inventory.page');
const checkoutPage = require('../pageobjects/checkout.page');
describe('cheackout without products', () => {
    it('cheackout without products', async () => {
        await inventoryPage.open();
        await inventoryPage.shoppingCart();
        await checkoutPage.checkout();
    });
    it('should display "cart is empty" message', async () => {
        await checkoutPage.cartError();
    });
});