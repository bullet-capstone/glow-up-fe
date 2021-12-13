import { aliasQuery, aliasMutation } from "../utils/graphql-test-utils"

describe("When User has not recorded today's mood or any habits", () => {
  beforeEach(() => {
    cy.intercept("POST", "http://localhost:3001/graphql", req => {
      if (req.body.operationName === "FetchDailyEntries") {
        req.alias = "gqlNoDailyEntries"
        req.reply({ fixture: "mockNoDailyEntries.json" })
      }
    }) // end of intercept

    cy.visit("./track")
  }) // end of before each

  it("Use should not see a display of today's mood", () => {
    cy.get(".today-mood-container").should("not.exist")
  })

  it("Instead, User sees a form to remind User to record mood and five emojis representing moods", () => {
    cy.get(".mood-form > h2").contains("How are you feeling today")
    cy.get(".mood-form").find("input[type='radio']").should("have.length", 5)
  })

  it("After User records and submits mood, User should not see the form but the mood and description User just enters", () => {
    cy.get(".mood-form").find("input[type='radio']").eq(0).click({ force: true })
    cy.get(".mood-form > input[type='text']").type("Super awesome")
    cy.intercept("POST", "http://localhost:3001/graphql", req => {
      if (req.body.operationName === "FetchDailyEntries") {
        req.alias = "gqlCreateMoodMutation"
        req.reply({ fixture: "submittedMoodAndHabits.json" })
      }
    })
      .get(".mood-submit-button")
      .click()
    cy.wait("@gqlCreateMoodMutation")
    cy.get(".today-mood-container > :nth-child(2)").contains("😁")
    cy.get(".today-mood-container > :nth-child(3)").contains("Super awesome")
  })

  it("If User has not recorded habits, User should see a prompt to remind completing habits", () => {
    cy.get(".habit-form-question").contains("No check in yet")
  })

  it("If User has not recorded habits, habit cards should be in light background color", () => {
    cy.get(".habit-card-button").eq(0).should("have.css", "backgroundColor").and("eq", "rgb(231, 231, 231)")
  })
}) // end of describe block
