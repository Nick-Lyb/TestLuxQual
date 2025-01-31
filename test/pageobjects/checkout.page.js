class CheckoutPage {
    get checkoutButton() { return $('#checkout'); }
    get firstNameField() { return $('#first-name'); }
    get lastNameField() { return $('#last-name'); }
    get postalCodeField() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    get finishButton() { return $('#finish'); }
    get backButton() { return $('#back-to-products'); }

    async checkout() {
        await this.checkoutButton.click();
    }
    async finLanPoco () {
        await this.firstNameField.setValue('John');
        await this.lastNameField.setValue('Doe');
        await this.postalCodeField.setValue('12345');
    }
    async continue() {
        await this.continueButton.click();
    }
    async finish() {
        await this.finishButton.click();
    }
    async back() {
        await this.backButton.click();
    }



}

module.exports = new CheckoutPage();


