var cartLocators = {
    placeOrderBtn: 'btn btn-success',
    inputNameCart: '#name',
    inputCountry: '#country',
    inputCity: '#city',
    inputCreditCard: '#card',
    inputMonth: '#month',
    inputYear: '#year',
    closeBtnCart: '#orderModal > div > div > div.modal-footer > button.btn.btn-secondary',
    purchaseBtnCart: '[onclick = "purchaseOrder()"]',
    deleteMonitor: '[onclick="deleteItem(\'5c18ac13-2137-6835-56bc-8628e719589e\')"]',
    deleteLaptop: '[onclick="deleteItem(\'75513e3d-7bd0-522c-0338-b1da28b0a931\')"]',
    deletePhone: '[onclick="deleteItem(\'6a4a85af-3cbf-4efc-75b1-80d5e3c1b72d\')"]',
    okBtn: 'confirm btn btn-lg btn-primary',
    tableResponsive: '.table-responsive',
}
class CartPage{
    placeOrderBtn(){return cy.get(cartLocators.placeOrderBtn);}
    inputNameCart(){return cy.get(cartLocators.inputNameCart);}
    inputCountry(){return cy.get(cartLocators.inputCountry);}
    inputCity(){return cy.get(cartLocators.inputCity);}
    inputCreditCard(){return cy.get(cartLocators.inputCreditCard);}
    inputMonth(){return cy.get(cartLocators.inputMonth);}
    inputYear(){return cy.get(cartLocators.inputYear);}
    closeBtnCart(){return cy.get(cartLocators.closeBtnCart);}
    purchaseBtnCart(){return cy.get(cartLocators.purchaseBtnCart);}
    deleteMonitor(){return cy.get(cartLocators.deleteMonitor);}
    deleteLaptop(){return cy.get(cartLocators.deleteLaptop);}
    deletePhone(){return cy.get(cartLocators.deletePhone);}
    okBtn(){return cy.get(cartLocators.okBtn);}
    tableResponsive(){return cy.get(cartLocators.tableResponsive);}


}
export default CartPage;