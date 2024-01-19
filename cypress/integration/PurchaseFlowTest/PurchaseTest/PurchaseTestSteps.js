import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import BasePage from "C:/Users/tania.torres/Cypress Final Project/cypress/support/Methods/BasePage.js"
const basePage = new BasePage();

Before(() => {
    cy.fixture('userData').as('UserData');
});
Given('I visit the Home Page', () => {
        cy.visit('/');
    });
When('I choose the category {string}', category => {
    basePage.chooseCategory(category);
});
When('I select the item {string}', item => {
    basePage.selectItem(item);
});
And('I click on "Add to cart" the item {string}', newItem => {
    basePage.addItemToCart(newItem);
});
When('I click to navigate to {string}', element => {
    basePage.clickOnLink(element);
});
And('I click on delete the item {string}', itemToDelete => {
    basePage.deleteItem(itemToDelete);
});
And('I click to buy my item(s)', () => {
    basePage.clickPlaceOrderBtn();
});
And('I start to fill my personal data in the blanks', () => {
    cy.get(@UserData).then((UserData) => {
        basePage.placeOrderData(UserData.contactName, UserData.country,
        UserData.city, UserData.creditCard, UserData.month, UserData.year);
    });
});
And('I decide to finish my purchase', () => {
    basePage.clickPurchaseBtnCart();
});
Then('I receive a confirmation of my purchase and click on it', () => {
    basePage.clickOkBtn();
});
Then('The item {string} is visible', itemVisible => {
    basePage.isItemVisible(itemVisible);
});