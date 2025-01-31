const inventoryPage = require('../pageobjects/inventory.page');

describe('add to cart, burger, logout, login, cart', () => {
    it('all', async () => {
        await inventoryPage.open();
        await inventoryPage.addToCart();
        await inventoryPage.openBurger();
        await inventoryPage.logout();
        await inventoryPage.open();
        await inventoryPage.shoppingCart();
    });

});
