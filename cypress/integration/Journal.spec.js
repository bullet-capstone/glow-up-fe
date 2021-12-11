import { aliasQuery } from '../utils/graphql-test-utils'
import mockUserData from '../fixtures/mockUserData.json'

describe('Journal', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3001/graphql',
      (req) => aliasQuery(req, 'fetchJournalEntries'))

    cy.visit('/journal');

    cy.wait('@gqlfetchJournalEntriesQuery')
      .then(interception => {
        expect(interception).to.be.an('object')
      })
      .its('response.body.data.fetchUser')
      .should('have.property', 'journalEntries')
      .then(journalEntries => {
        expect(journalEntries).to.be.an('array')
        expect(journalEntries.length).to.eq(3)
      })
  })

  it('should show the page title', () => {
    cy.get('h1').contains('Journal')
  })

  it('should display an accordion with the date of each entry', () => {
<<<<<<< HEAD
    cy.get('p').eq(0)
      .contains(`Journal Entry ${new Date("2021-11-09T00:00:00Z").toLocaleString("en-US")}`)
      .get('p').eq(2)
      .contains(`Journal Entry ${new Date("2021-11-10T00:00:00Z").toLocaleString("en-US")}`)
      .get('p').eq(4)
      .contains(`Journal Entry ${new Date("2021-11-11T00:00:00Z").toLocaleString("en-US")}`)
=======
    cy.get('p').eq(0).contains('Journal Entry 11/8/2021, 5:00:00 PM')
    cy.get('p').eq(2).contains('Journal Entry 11/9/2021, 5:00:00 PM')
    cy.get('p').eq(4).contains('Journal Entry 11/10/2021, 5:00:00 PM')
>>>>>>> 5b3af202017903dad5bb2b9a3c5aba3e7b62b15c
  })

  it('should expand and display the content of the entry when clicked', () => {
    cy.get('#30')
      .should('have.attr', 'aria-expanded', 'false')
      .click()
      .should('have.attr', 'aria-expanded', 'true')
      .get('div[aria-labelledby=30] > div > p')
      .should('be.visible')
      .contains('something VERY important')

    cy.get('#29')
      .should('have.attr', 'aria-expanded', 'false')
      .click()
      .should('have.attr', 'aria-expanded', 'true')
      .get('div[aria-labelledby=29] > div > p')
      .should('be.visible')
      .contains('something REALLY important')

    cy.get('#28')
      .should('have.attr', 'aria-expanded', 'false')
      .click()
      .should('have.attr', 'aria-expanded', 'true')
      .get('div[aria-labelledby=28] > div > p')
      .should('be.visible')
      .contains('something NOT important')
  })

  it('should hide the content of the entry when clicked again', () => {
    cy.get('#30')
      .should('have.attr', 'aria-expanded', 'false')
      .click()
      .should('have.attr', 'aria-expanded', 'true')
      .click()
      .get('div[aria-labelledby=30] > div > p')
      .should('not.be.visible')
  })
})
