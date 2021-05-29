
const url = 'https://www.sfcinemacity.com'
// const todayDate = Cypress.moment().format('DD MMM YYYY');
// const nowTime = Cypress.moment().format('HH:mm');
// const expectTime = Cypress.moment().add(1, 'hours').format('HH:mm');
const nameMovie = 'Homestay'
const locationMovie = 'SFX CINEMA Central Rama 9'

describe('Check Time Movie', () => {
    it('Go to url', () => {
       cy.visit(url)
    })
    it('Chang language',()=>{
        cy.wait(1)
        cy.get('[class="button button-enter-site"]').click()
        cy.get('[class="lang-switcher"]>li').each($el =>{
            if($el.get(0).innerText === 'ENG'){
                cy.wrap($el).click()
            }
        })
        cy.get('[class="top-navigation"]')
        .contains('Login/Sign up')
    })
    it('Click Cinema',()=>{
        // cy.get('[class="navigation nav-normal"]')
        //     .contains("Cinemas")
        //     .click()
        cy.get('[class="button dropdown-button"]')
            .contains('Select Cinema')
            .click()
        cy.contains(locationMovie)
            .click()
    })
    it('Select Movie',()=>{
        cy.get('[class="button dropdown-button"]')
            .contains('All Movie')
            .click()
        cy.get('h3[class="name"]')
            .contains('Mortal Kombat')
            .click()
        cy.get('.showtime-button')
            .click()
        cy.get('[class="selected"]>p')
            .contains('21 Apr 2021')
    })
  })


//   https://medium.com/nellika/%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99-automated-test-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-cypress-io-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%A5%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-dcda05f3a585