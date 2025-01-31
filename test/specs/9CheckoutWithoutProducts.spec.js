const inventoryPage = require('../pageobjects/inventory.page');
const checkoutPage = require('../pageobjects/checkout.page');
describe('cheackout without products', () => {
    it('cheackout without products', async () => {
        await inventoryPage.open();
        await inventoryPage.shoppingCart();
        await checkoutPage.checkout();
    });
    it('should display "cart is empty" message', async () => {

        const errorMessage = await $('#cart_error_message');
        await expect(errorMessage).toBeDisplayed();
        await expect(errorMessage).toHaveText('cart is empty');
    });
});