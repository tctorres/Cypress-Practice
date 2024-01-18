import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from "C:/Users/tania.torres/Cypress Final Project/cypress/support/Pages/HomePage.js";
const homePage = new HomePage();

    Given('I visit the Home Page', () => {
        cy.visit('/');
    });
    When('I click on the right arrow of the carousel to see the {string} image', () => {
        homePage.clickCarouselNextIcon();
    });
    When('I click on the left arrow of the carousel to see the {string} image', () => {
         homePage.clickCarouselPrevIcon();
        });
    When('I click on the indicator #{string} of the carousel', button => {
        homePage.clickSlide(button);
    });
    Then('The carousel image changes to the image #{string}', slide => {
        homePage.checkSlide(slide);
    });