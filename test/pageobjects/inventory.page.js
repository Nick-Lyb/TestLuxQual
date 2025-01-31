const loginPage = require('./login.page');

class InventoryPage {
    get addToCartButton() { return $('#add-to-cart-sauce-labs-backpack'); }
    get shoppingCartButton() { return $('a[class="shopping_cart_link"]'); }
    get burgerMenu() { return $('#react-burger-menu-btn'); }
    get logoutButton() { return $('#logout_sidebar_link'); }
    get shoppingCartButton() { return $('#shopping_cart_container'); }
    get addToCartButton() { return $('#add-to-cart-sauce-labs-backpack'); }
    get sortButton() { return $('#header_container'); }
    get twitter() { return $('a[href="https://twitter.com/saucelabs"]'); }
    get facebook() { return $('a[href="https://www.facebook.com/saucelabs"]'); }
    get linkedin() { return $('a[href="https://www.linkedin.com/company/sauce-labs/"]'); }
    async open() {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    }

    async openBurger() {
        await this.burgerMenu.click();
    }

    async logout() {
        await this.logoutButton.click();
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async shoppingCart() {
        await this.shoppingCartButton.click();
    }

    async sortAll() {
        await this.sortButton.click();
        await browser.$('option[value="za"]').click();
        
        await this.sortButton.click();
        await browser.$('option[value="lohi"]').click();
        
        await this.sortButton.click();
        await browser.$('option[value="hilo"]').click();
            
        await this.sortButton.click();
        await browser.$('option[value="az"]').click();
    }


    async openTwitter() {
        await this.twitter.click();
    }

    async openFacebook() {
        await this.facebook.click();
    }

    async openLinkedin() {
        await this.linkedin.click();
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async openShoppingCart() {
        await this.shoppingCartButton.click();
    }
}
module.exports = new InventoryPage();