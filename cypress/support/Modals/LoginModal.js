var loginLocators = {
   inputUsernameLogIn: '#loginusername',
   inputPswdLogIn: '#loginpassword',
   closeBtnLogIn: '#logInModal > div > div > div.modal-footer > button.btn.btn-secondary',
   logInBtn: '[onclick = "logIn()"]',

}
class LoginModal{
    inputUsernameLogIn(){return cy.get(loginLocators.inputUsernameLogIn);}
    inputPswdLogIn(){return cy.get(loginLocators.inputPswdLogIn);}
    closeBtnLogIn(){return cy.get(loginLocators.closeBtnLogIn);}
    logInBtn(){return cy.get(loginLocators.logInBtnBtn);}


}
export default LoginModal;