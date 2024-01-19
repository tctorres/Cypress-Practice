var pageLocators = {
    phoneCat: '[onclick="byCat(\'phone\')"]',
    laptopsCat: '[onclick="byCat(\'notebook\')"]',
    monitorsCat: '[onclick="byCat(\'monitor\')"]',
    carouselNextIcon: '[data-slide="next"]',
    carouselPrevIcon: '[data-slide="prev"]',
    firstSlide: '[data-slide-to="0"]',
    secondSlide: '[data-slide-to="1"]',
    thirdSlide: '[data-slide-to="2"]',
    samsungGS6: 'div:nth-child(1) > div > div > h4 > a',
    sonyVaioi5: 'div:nth-child(8) > div > div >h4 > a',
    asusMonitor: 'div:nth-child(2) > div > div > h4 > a',
    addPhoneToCart:'[onclick="addToCart(1)"]',
    addLaptopToCart: '[onclick="addToCart(8)"]',
    addMonitorToCart: '[onclick="addToCart(14)"]',
    productsHome : '#tbodyid',

}
class HomePage{

    phoneCat(){return cy.get(pageLocators.phoneCat);}
    laptopsCat(){return cy.get(pageLocators.laptopsCat);}
    monitorsCat(){return cy.get(pageLocators.monitorsCat);}
    carouselNextIcon(){return cy.get(pageLocators.carouselNextIcon);}
    carouselPrevIcon(){return cy.get(pageLocators.carouselPrevIcon);}
    firstSlide(){return cy.get(pageLocators.firstSlide);}
    secondSlide(){return cy.get(pageLocators.secondSlide);}
    thirdSlide(){return cy.get(pageLocators.thirdSlide);}
    samsungGS6(){return cy.get(pageLocators.samsungGS6, {timeout: 3000});}
    sonyVaioi5(){return cy.get(pageLocators.sonyVaioi5);}
    asusMonitor(){return cy.get(pageLocators.asusMonitor);}
    addPhoneToCart(){return cy.get(pageLocators.addPhoneToCart);}
    addLaptopToCart(){return cy.get(pageLocators.addLaptopToCart);}
    addMonitorToCart(){return cy.get(pageLocators.addMonitorToCart);}
    productsHome(){return cy.get(pageLocators.productsHome);}






}
export default HomePage;