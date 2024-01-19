var signUpLocators = {
    inputUsernameSignUp: '#sign-username',
    inputPswdSignUp: '#sign-password',
    closeBtnSignUp: '#signInModal > div > div > div.modal-footer > button.btn.btn-secondary',
    signUpBtn: '[onclick = "register()"]',

}
class SignupModal{
    inputUsernameSignUp(){return cy.get(signUpLocators.inputUsernameSignUp);}
    inputPswdSignUp(){return cy.get(signUpLocators.inputPswdSignUp);}
    closeBtnSignUp(){return cy.get(signUpLocators.closeBtnSignUp);}
    signUpBtn(){return cy.get(signUpLocators.signUpBtn);}


}
export default SignupModal;