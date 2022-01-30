import { aliasQuery } from "../utils/graphql-test-utils"

describe.skip("Journal", () => {
  beforeEach(() => {
    cy.intercept("POST", "https://glowup-be.herokuapp.com/graphql", req => aliasQuery(req, "fetchJournalEntries"))

    cy.visit("/journal")

    cy.wait("@gqlfetchJournalEntriesQuery")
      .then(interception => {
        expect(interception).to.be.an("object")
      })
      .its("response.body.data.fetchUser")
      .should("have.property", "journalEntries")
      .then(journalEntries => {
        expect(journalEntries).to.be.an("array")
        expect(journalEntries.length).to.eq(3)
      })
  })

  it("should show the page title", () => {
    cy.get("h1").contains("Journal")
  })

  it.skip("should display an accordion with the date of each entry", () => {
    cy.get("p")
      .eq(0)
      .contains(`Journal Entry ${new Date("2021-11-09T00:00:00Z").toLocaleString("en-US")}`)
      .get("p")
      .eq(2)
      .contains(`Journal Entry ${new Date("2021-11-10T00:00:00Z").toLocaleString("en-US")}`)
      .get("p")
      .eq(4)
      .contains(`Journal Entry ${new Date("2021-11-11T00:00:00Z").toLocaleString("en-US")}`)
  })

  it("should expand and display the content of the entry when clicked", () => {
    cy.get("#30")
      .should("have.attr", "aria-expanded", "false")
      .click()
      .should("have.attr", "aria-expanded", "true")
      .get("div[aria-labelledby=30] > div > p")
      .should("be.visible")
      .contains("something VERY important")

    cy.get("#29")
      .should("have.attr", "aria-expanded", "false")
      .click()
      .should("have.attr", "aria-expanded", "true")
      .get("div[aria-labelledby=29] > div > p")
      .should("be.visible")
      .contains("something REALLY important")

    cy.get("#28")
      .should("have.attr", "aria-expanded", "false")
      .click()
      .should("have.attr", "aria-expanded", "true")
      .get("div[aria-labelledby=28] > div > p")
      .should("be.visible")
      .contains("something NOT important")
  })

  it("should hide the content of the entry when clicked again", () => {
    cy.get("#30")
      .should("have.attr", "aria-expanded", "false")
      .click()
      .should("have.attr", "aria-expanded", "true")
      .click()
      .get("div[aria-labelledby=30] > div > p")
      .should("not.be.visible")
  })
})
