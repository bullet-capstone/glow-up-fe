// Move happy mood test to a separate file b/c two intercepts with the same operation name interfere with each other if they are in the same Track.spec.js

describe.skip("Recorded happy mood in track page", () => {
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
