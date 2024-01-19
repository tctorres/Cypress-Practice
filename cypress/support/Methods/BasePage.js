import HomePage from "C:/Users/tania.torres/Cypress Final Project/cypress/support/Pages/HomePage.js";
import CartPage from "C:/Users/tania.torres/Cypress Final Project/cypress/support/Pages/CartPage.js"
import AboutUsModal from "C:/Users/tania.torres/Cypress Final Project/cypress/support/Modals/AboutUsModal.js"
import ContactModal from "C:/Users/tania.torres/Cypress Final Project/cypress/support/Modals/ContactModal.js"
import LoginModal from "C:/Users/tania.torres/Cypress Final Project/cypress/support/Modals/LoginModal.js"
import SignupModal from "C:/Users/tania.torres/Cypress Final Project/cypress/support/Modals/SignupModal.js"
import NavBar from "C:/Users/tania.torres/Cypress Final Project/cypress/support/Header/NavBar.js"
const homePage = new HomePage();
const cartPage = new CartPage();
const aboutUsModal = new AboutUsModal();
const contactModal = new ContactModal();
const loginModal = new LoginModal();
const signupModal = new SignupModal();
const navBar = new NavBar();

class BasePage{

clickCarouselNextIcon(){return homePage.carouselNextIcon().click();}
clickCarouselPrevIcon(){return homePage.carouselPrevIcon().click();}

    isItemVisible(itemVisible){
        switch(newItem){
            case 'addToCart':
                homePage.addMonitorToCart().should('have.class', 'btn btn-success btn-lg');
                break;
            case 'SamsungGS6':
                homePage.samsungGS6().should('have.class', 'col-lg-4 col-md-6 mb-4');
                break;
            case 'SonyVaioi5':
                homePage.sonyVaioi5().should('be.visible');
                break;
            case 'AsusMonitor':
                homePage.asusMonitor().should('be.visible');
                break;
            default:
                throw new Error('Element not found: ${itemVisible}');
        }
    }

    isLinkVisible(link){
        switch(link){
            case 'Home':
                homePage.productsHome().should('be.visible');
                break;
            case 'Contact':
                contactModal.sendMessageContact().should('be.visible');
                break;
            case 'About us':
                aboutUsModal.modal().should('have.css','display','block');
                break;
            case 'Cart':
                cartPage.tableResponsive().should('be.visible');
                break;
            case 'Log in':
                loginModal.inputUsernameLogIn().should('be.visible');
                break;
            case 'Sign up':
                signupModal.signUpBtn().should('be.visible');
                break;
            default:
                throw new Error('Link not found: ${link}');
        }
    }

    addItemToCart(newItem){
        switch(newItem){
            case 'SamsungGS6':
                homePage.addPhoneToCart().click() + '{enter}';
                break;
            case 'SonyVaioi5':
                homePage.addLaptopToCart().click + '{enter}';
                break;
            case 'AsusMonitor':
                homePage.addMonitorToCart().click + '{enter}';
                break;
            default:
                throw new Error('Element not found: ${newItem}');
        }
    }
    typeUsernameSignUp(username){return signupModal.inputUsernameSignUp().type(username);}
    typePswdSignUp(password){return signupModal.inputPswdSignUp().type(password);}
    clickCloseBtnSignUp(){return signupModal.closeBtnSignUp().click();}
    clickSignUpBtn(){return signupModal.signUpBtn().click() + '{enter}';}

    typeInputUsernameLogIn(username){return loginModal.inputUsernameLogIn().type(username);}
    typePswdLogIn(password){return loginModal.inputPswdLogIn().type(password);}
    clickCloseBtnLogIn(){return loginModal.closeBtnLogIn().click();}
    clickLoginBtn(){return loginModal.logInBtn().click();}


    placeOrderData(name, country, city, creditCard, month, year){
        cartPage.inputNameCart().type(name);
        cartPage.inputCountry().type(country);
        cartPage.inputCity().type(city);
        cartPage.inputCreditCard().type(creditCard);
        cartPage.inputMonth().type(month);
        cartPage.inputYear().type(year);
    }

    deleteItem(itemToDelete){
        switch(itemToDelete){
            case 'SamsungGS6':
                homePage.deletePhone().click();
                break;
            case 'SonyVaioi5':
                homePage.deleteLaptop().click();
                break;
            case 'AsusMonitor':
                homePage.deleteMonitor().click();
                break;
            default:
                throw new Error('item not found: ${itemToDelete}');
        }
    }

    clickOnLink(element){
        switch(element){
            case 'Home':
                navBar.homeNav().click();
                break;
            case 'Contact':
                navBar.contactNav().click();
                break;
            case 'About us':
                navBar.aboutUsNav().click();
                break;
            case 'Cart':
                navBar.cartNav().click();
                break;
            case 'Log in':
                navBar.logInNav().click();
                break;
            case 'Sign up':
                navBar.signUpNav().click();
                break;
            default:
                throw new Error('invalid link: ${element}');
        }
    }

    selectItem(item){
        switch(item){
            case 'SamsungGS6':
                homePage.samsungGS6().click();
                break;
            case 'SonyVaioi5':
                homePage.sonyVaioi5().click();
                break;
            case 'AsusMonitor':
                homePage.asusMonitor().click();
                break;
            default:
                throw new Error('item not found: ${item}');
        }
    }


    chooseCategory(category){
        switch(category){
            case 'Phones':
                homePage.phoneCat().click();
                break;
            case 'Laptops':
                homePage.laptopsCat().click();
                break;
            case 'Monitors':
                homePage.monitorsCat().click();
                break;
            default:
                throw new Error('Category not found: ${category}');
        }

    }


    checkSlide(slide){
        switch(slide){
            case '1':
                homePage.firstSlide().should('have.class', 'active');
                break;
            case '2':
                homePage.secondSlide().should('have.class', 'active');
                break;
            case '3':
                homePage.thirdSlide().should('have.class', 'active');
                break;
            default:
                throw new Error('Invalid slide number: ${slide}');
        }


    }
    clickSlide(button){
            switch(button){
                case '1':
                    homePage.firstSlide().click();
                    break;
                case '2':
                    homePage.secondSlide().click();
                    break;
                case '3':
                    homePage.thirdSlide().click();
                    break;
                default:
                    throw new Error('Invalid button number: ${button}');
            }

        }
}
export default BasePage;