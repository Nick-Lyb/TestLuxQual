const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../page-objects/login.page');
const { expect } = require('@wdio/globals');

Given('User is located on the main page of saucedemo website', async () => {
    await loginPage.open();
});

When('User click "Login" button', async () => {
    await loginPage.clickLogin();
});

Then('User should see "Epic sadface: Username is required" error message', async () => {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface: Username is required');
});