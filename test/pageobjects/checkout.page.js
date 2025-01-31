class CheckoutPage {
    get addToCartButton() { return $('#add-to-cart-sauce-labs-backpack'); }
    get shoppingCartButton() { return $('a[class="shopping_cart_link"]'); }
    get checkoutButton() { return $('#checkout'); }
    get firstNameField() { return $('#first-name'); }
    get lastNameField() { return $('#last-name'); }
    get postalCodeField() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    get finishButton() { return $('#finish'); }
    get backButton() { return $('#back-to-products'); }






}

module.exports = new CheckoutPage();


