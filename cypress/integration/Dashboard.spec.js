import { aliasQuery } from '../utils/graphql-test-utils'

describe('Dashboard Daily and Weekly Entries', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3001/graphql',
      (req) => aliasQuery(req, 'FetchDailyEntries'))

    cy.visit('/dashboard');

    cy.wait('@gqlFetchDailyEntriesQuery')
      .then(interception => {
        expect(interception).to.be.an('object')
      })
  })

  it('should display the title of the page', () => {
    cy.get('h2').contains('My Dashboard')
  })

  it('should display a quote', () => {
    cy.get('.page-quote').contains("Every action you take is a vote for the type of person you wish to become.")
  })

  it('should display the mood entry for that day', () => {
    cy.get('.today-mood-container > p').eq(0).contains('I am feeling: 😐')
      .get('.today-mood-container > p').eq(1).contains('Mood 29')
  })

  it('should display the habit entries for that day', () => {
    cy.get('h4').contains('Habits I completed:')
      .get('.completed-habit').eq(0).contains('Exercise')
      .get('.completed-habit').eq(1).contains('Drink Water')
  })
})


describe('Dashboard Weekly Entries', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3001/graphql',
      (req) => {
        aliasQuery(req, 'fetchWeeklyEntries')
      })

    cy.visit('/dashboard');

    cy.wait('@gqlfetchWeeklyEntriesQuery')
      .then(interception => {
        expect(interception).to.be.an('object')
      })
      .its('response.body.data.fetchUser')
      .should('have.property', 'weeklyMoods')
  })

  it('should display the past 7 days mood entry and habit entries', () => {
    cy.get('.weekly-card').should('have.length', 7)
      .get('.weekly-card-mood').eq(0).contains('Mood: ❓')
      .get('.weekly-card-mood').eq(4).contains('Mood: 😭')
      .get('.weekly-card-habit').eq(0).contains('Eat Healthy')
      .get('.weekly-card-habit').eq(1).contains('Take a Shower')
      .get('.weekly-card-habit').eq(2).contains('Make Bed')
      .get('.weekly-card-habit').eq(3).contains('Floss')
  })
})

describe('Dashboard Monthly Mood Graph', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3001/graphql',
      (req) => aliasQuery(req, 'fetchMonthlyEntries'))

    cy.visit('/dashboard');

    cy.wait('@gqlfetchMonthlyEntriesQuery')
      .then(interception => {
        expect(interception).to.be.an('object')
      })
      .its('response.body.data.fetchUser')
      .should('have.property', 'monthlyMoods')
  })

  it('should display the current month', () => {
    cy.get('.month-title').contains(`${new Date().toLocaleString('default', { month: 'long' })}`)
  })
})
