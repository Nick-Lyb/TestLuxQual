const inventoryPage = require('../pageobjects/inventory.page');

describe('Valid Login Test', () => {
    it('should log in with valid credentials', async () => {
        await inventoryPage.open();
        await inventoryPage.openTwitter();
        await inventoryPage.openFacebook();
        await inventoryPage.openLinkedin();
    });
});