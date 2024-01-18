var aboutUsLocators {
    playBtnAbtUs: '.vjs-big-play-button',
    closeBtnAbtUs: '#videoModal > div > div > div.modal-footer > button',

}
class AboutUsModal{
    playBtnAbtUs(){return cy.get(aboutUsLocators.playBtnAbtUs);}
    closeBtnAbtUs(){return cy.get(aboutUsLocators.closeBtnAbtUs);}

    clickPlayBtnAbtUs(){return this.playBtnAbtUs().click();}
    clickCloseBtnAbtUs(){return this.closeBtnAbtUs().click();}
}
export default AboutUsModal;