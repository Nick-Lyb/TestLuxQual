const inventoryPage = require('../pageobjects/inventory.page');

describe('inventory page, burger, logout', () => {
    it('inventory page', async () => {
        await inventoryPage.open();
        await inventoryPage.burger();
        await inventoryPage.logout();
    });

});