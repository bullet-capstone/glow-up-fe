import { aliasQuery } from '../utils/graphql-test-utils'

describe('Journal', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3001/graphql', (req) => {
      // Queries
      aliasQuery(req, 'fetchUser')
    })

    cy.visit('/journal');
    cy.wait('@gqlfetchUserQuery')
      .then(stub => {
        expect(stub).to.be.an('object');
      })
  })

  it('should be true', () => {
    expect(true).to.be.true
  })
})
