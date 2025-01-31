const inventoryPage = require('../pageobjects/inventory.page');

describe('inventory page, sort by 1 element, sort all', () => {
    it('all', async () => {
        await inventoryPage.open();
        await inventoryPage.sortAll();
    });
});

