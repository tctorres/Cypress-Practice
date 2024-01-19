import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import BasePage from "C:/Users/tania.torres/Cypress Final Project/cypress/support/Methods/BasePage.js"
const basePage = new BasePage();

Given('I visit the Home Page', () => {
        cy.visit('/');
    });
When('I click to navigate to {string}', element => {
    basePage.clickOnLink(element);
});
Then('The page displayed is {string}', link => {
    basePage.isLinkVisible(link);
});
