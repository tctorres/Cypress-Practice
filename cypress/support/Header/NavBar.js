var navBarLocators = {
    homeNav: 'li.nav-item.active > a',
    contactNav: '.nav-link[data-target = "#exampleModal"]',
    aboutUsNav: '.nav-link[data-target = "#videoModal"]',
    cartNav: '#cartur',
    logInNav: '#login2',
    signUpNav: '#signin2',
}
class NavBar{
    homeNav(){return cy.get(navBarLocators.homeNav);}
    contactNav(){return cy.get(navBarLocators.contactNav);}
    aboutUsNav(){return cy.get(navBarLocators.aboutUsNav);}
    cartNav(){return cy.get(navBarLocators.cartNav);}
    logInNav(){return cy.get(navBarLocators.logInNav);}
    signUpNav(){return cy.get(navBarLocators.signUpNav);}


}
export default NavBar;