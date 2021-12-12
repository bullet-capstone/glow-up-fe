import { aliasQuery } from "../utils/graphql-test-utils"

describe("Recorded sad mood and habits in track page", () => {
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

  it("If user has recorded habits, user should see a propmt to add more habits", () => {
    cy.get(".habit-form-container > h2").contains("Add more habits")
  })

  it("If user has recorded habits, user should see the completed habits in different style", () => {
    cy.get(".habit-card-button").eq(0).should("have.css", "backgroundColor").and("eq", "rgb(134, 174, 91)")

    cy.get(".habit-card-button").eq(4).should("have.css", "backgroundColor").and("eq", "rgb(134, 174, 91)")
  })
})
