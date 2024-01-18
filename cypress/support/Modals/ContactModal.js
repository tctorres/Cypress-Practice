var contactLocators {
    inputEmail: '#recipient-email',
    inputName: '#recipient-name',
    inputMessage: '#message-text',
    closeBtnContact: '#exampleModal > div > div > div.modal-footer > button.btn.btn-secondary',
    sendMessageContact: '#exampleModal > div > div > div.modal-footer > button.btn.btn-primary',

}
class contactLocators{
    inputEmail(){return cy.get(contactLocators.inputEmail);}
    inputName(){return cy.get(contactLocators.inputName);}
    inputMessage(message){return cy.get(contactLocators.inputMessage);}
    closeBtnContact(){return cy.get(contactLocators.closeBtnContact);}
    sendMessageContact(){return cy.get(contactLocators.sendMessageContact);}

    typeInputEmail(email){return this.inputEmail().type(email);}
    typeInputName(name){return this.inputName().type(name);}
    typeInputMessage(message){return this.inputMessage().type(message);}
    clickCloseBtnContact(){return this.closeBtnContact().click();}
    clickSendMessageContact(){return this.sendMessageContact().click() + '{enter}';}
}
export default ContactModal;