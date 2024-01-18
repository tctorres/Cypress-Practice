var navBarLocators = {
    homeNav: 'li.nav-item.active > a',
    contactNav: '.nav-link[data-target = "#exampleModal"]',
    aboutUsNav: '.nav-link[data-target = "#videoModal"]',
    cartNav: '#cartur',
    logInNav: '#login2',
    signUpNav: '#signin2',
    storeName: 'a#nava.navbar-brand',
}
class NavBar{
    homeNav(){return cy.get(navBarLocators.homeNav);}
    contactNav(){return cy.get(navBarLocators.contactNav);}
    aboutUsNav(){return cy.get(navBarLocators.aboutUsNav);}
    cartNav(){return cy.get(navBarLocators.cartNav);}
    logInNav(){return cy.get(navBarLocators.logInNav);}
    signUpNav(){return cy.get(navBarLocators.signUpNav);}
    storeName(){return cy.get(navBarLocators.storeName);}

    clickHomeNav(){return this.homeNav().click();}
    clickContactNav(){return this.contactNav().click();}
    clickAboutUsNav(){return this.aboutUsNav().click()}
    clickCartNav(){return this.cartNav().click();}
    clickLogInNav(){return this.logInNav().click();}
    clickSignUpNav(){return this.signUpNav().click();}
    clickStoreName(){return this.storeName().click();}
}
export default NavBar;