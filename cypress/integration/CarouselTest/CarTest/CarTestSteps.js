import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import BasePage from "C:/Users/tania.torres/Cypress Final Project/cypress/support/Methods/BasePage.js"
const basePage = new BasePage();

    Given('I visit the Home Page', () => {
        cy.visit('/');
    });
    When('I click on the right arrow of the carousel to see the {string} image', () => {
        basePage.clickCarouselNextIcon();
    });
    When('I click on the left arrow of the carousel to see the {string} image', () => {
        basePage.clickCarouselPrevIcon();
        });
    When('I click on the indicator #{string} of the carousel', button => {
        basePage.clickSlide(button);
    });
    Then('The carousel image changes to the image #{string}', slide => {
        basePage.checkSlide(slide);
    });