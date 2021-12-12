import { aliasQuery } from "../utils/graphql-test-utils"

describe("When user has not recorded today's mood or any habits", () => {
  beforeEach(() => {
    cy.intercept("POST", "http://localhost:3001/graphql", req => {
      if (req.body.operationName === "FetchDailyEntries") {
        req.alias = "gqlNoDailyEntries"
        req.reply({ fixture: "mockNoDailyEntries.json" })
      }
    })
    cy.visit("/track")

    cy.intercept("GET", "https://api.quotable.io/random", { fixture: "mockQuote.json" }).as("getMockQuote")
  })

  it("Use should not see a display of today's mood", () => {
    cy.get(".today-mood-container").should("not.exist")
  })
})
