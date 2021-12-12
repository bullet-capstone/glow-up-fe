import { aliasQuery } from "../utils/graphql-test-utils"

describe("Recorded sad mood in track page", () => {
  beforeEach(() => {
    cy.intercept("POST", "http://localhost:3001/graphql", req => aliasQuery(req, "FetchDailyEntries"))

    cy.visit("/track")

    cy.wait("@gqlFetchDailyEntriesQuery").then(interception => {
      expect(interception).to.be.an("object")
    })

    cy.intercept("GET", "https://api.quotable.io/random", { fixture: "mockQuote.json" }).as("getMockQuote")
  })

  it("If user has filled in today's mood, user should see today's date and recorded mood", () => {
    let day = new Date()
    var dd = String(day.getDate()).padStart(2, "0")
    var mm = String(day.getMonth() + 1).padStart(2, "0")
    var yyyy = day.getFullYear()

    cy.get(".today-mood-container > h3").contains(`${yyyy}-${mm}-${dd}`)
    cy.get(".today-mood-container > :nth-child(2)").contains("😐")
  })

  it("If user's mood is below or equal 2, user should see a quote to cheer user up", () => {
    cy.get(".quote-body").contains("Whatever you are, be a good one.")
  })
})

describe("Recorded happy mood in track page", () => {
  it("If user's mood is above 2, user does not see a quote", () => {
    cy.intercept("POST", "http://localhost:3001/graphql", req => {
      if (req.body.operationName === "FetchDailyEntries") {
        req.alias = "gqlHappyMoodQuery"
        req.reply({ fixture: "mockHappyMood.json" })
      }
    })
    cy.visit("/track")

    cy.get(".today-mood-container > :nth-child(2)").contains("😁")
    cy.get(".quote-body").should("not.exist")
  })
})
