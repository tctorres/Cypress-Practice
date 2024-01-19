var aboutUsLocators = {
    playBtnAbtUs: '.vjs-big-play-button',
    closeBtnAbtUs: '#videoModal > div > div > div.modal-footer > button',
    modal: '#videoModal',
}
class AboutUsModal{
    playBtnAbtUs(){return cy.get(aboutUsLocators.playBtnAbtUs);}
    closeBtnAbtUs(){return cy.get(aboutUsLocators.closeBtnAbtUs);}
    modal(){return cy.get(aboutUsLocators.modal);}
}
export default AboutUsModal;