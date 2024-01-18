var pageLocators = {
    categories: 'a#cat.list-group-item',
    phoneCat: '[onclick="byCat(\'phone\')"]',
    laptopsCat: '[onclick="byCat(\'notebook\')"]',
    monitorsCat: '[onclick="byCat(\'monitor\')"]',
    carouselNextIcon: '.carousel-control-next-icon',
    carouselPrevIcon: '.carousel-control-prev-icon',
    firstSlide: '[alt = "First slide"]',
    secondSlide: '[alt = "Second slide"]',
    thirdSlide: '[alt = "Third slide"]',
    samsungGS6: 'div:nth-child(1) > div > div > h4 > a',
    nokiaL1520: 'div:nth-child(2) > div > div >h4 > a',
    sonyVaioi5: 'div:nth-child(8) > div > div >h4 > a',
    sonyVaioi7: 'div:nth-child(9) > div > div >h4 > a',
    appleMonitor:. 'div:nth-child(1) > div > div > h4 > a',
    asusMonitor: 'div:nth-child(2) > div > div > h4 > a',
    addPhoneToCart:'[onclick="addToCart(1)"]',
    addLaptopToCart: '[onclick="addToCart(8)"]',
    addMonitorToCart: '[onclick="addToCart(14)"]',
}
class HomePage{

    categories(){return cy.get(pageLocators.categories);}
    phoneCat(){return cy.get(pageLocators.phoneCat);}
    laptopsCat(){return cy.get(pageLocators.laptopsCat);}
    monitorsCat(){return cy.get(pageLocators.monitorsCat);}
    carouselNextIcon(){return cy.get(pageLocators.carouselNextIcon);}
    carouselPrevIcon(){return cy.get(pageLocators.carouselPrevIcon);}
    firstSlide(){return cy.get(pageLocators.firstSlide);}
    secondSlide(){return cy.get(pageLocators.secondSlide);}
    thirdSlide(){return cy.get(pageLocators.thirdSlide);}
    samsungGS6(){return cy.get(pageLocators.samsungGS6);}
    sonyVaioi5(){return cy.get(pageLocators.sonyVaioi5);}
    asusMonitor(){return cy.get(pageLocators.asusMonitor);}
    addPhoneToCart(){return cy.get(pageLocators.addPhoneToCart);}
    addLaptopToCart(){return cy.get(pageLocators.addLaptopToCart);}
    addMonitorToCart(){return cy.get(pageLocators.addMonitorToCart);}


    clickCategories(){return this.categories().click();}
    clickPhoneCat(){return this.phoneCat().click();}
    clickLaptopsCat(){return this.laptopsCat().click();}
    clickMonitorsCat(){return this.monitorsCat().click();}
    clickCarouselNextIcon(){return this.carouselNextIcon().click();}
    clickCarouselPrevIcon(){return this.carouselPrevIcon().click();}
    clickFirstSlide(){return this.firstSlide().click();}
    clickSecondSlide(){return this.secondSlide().click();}
    clickThirdSlide(){return this.thirdSlide().click();}
    clickSamsungGS6(){return this.samsungGS6().click();}
    clickSonyVaioi5(){return this.sonyVaioi5().click();}
    clickAsusMonitor(){return this.asusMonitor().click();}
    clickToAddPhone(){return this.addPhoneToCart().click() + '{enter}';}
    clickToAddLaptop(){return this.addLaptopToCart().click + '{enter}';}
    clickToAddMonitor(){return this.addMonitorToCart().click + '{enter}';}


}
export default HomePage;