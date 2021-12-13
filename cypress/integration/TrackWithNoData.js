import { aliasQuery } from "../utils/graphql-test-utils"

describe("When User has not recorded today's mood or any habits", () => {
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

  it("Instead, User sees a form to remind User to record mood and five emojis representing moods", () => {
    cy.get(".mood-form > h2").contains("How are you feeling today")
    cy.get(".mood-form").find("input[type='radio']").should("have.length", 5)
  })

  it("After User records and submits mood, User should not see the form but the mood and description User just enters", () => {
    cy.get(".mood-form").find("input[type='radio']").eq(0).click()
    cy.get(".mood-form > input[type='text']").type("Feeling good")
    cy.intercept("POST", "http://localhost:3001/graphql", req => {
      if (req.body.operationName === "FetchDailyEntries") {
        req.alias = "gqlNoDailyEntries"
        req.reply({ fixture: "mockNoDailyEntries.json" })
      }
    })
  })
})
