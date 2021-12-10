const { cyan } = require("@mui/material/colors")

describe("Track page", () => {
  beforeEach(() => {
    cy.intercept("POST", "/graphql", req => {
      if (req.body.operationName === "FetchDailyEntries") {
        req.alias = "gql-daily-entries"
        req.reply({ fixture: "mockDailyEntries.json" })
      }
    })
  })

  it("If user has filled in today's mood, user should see the mood in track page", () => {
    cy.visit("http://localhost:3000/glow-up-fe/track")
    cy.get(".today-mood-container > h3").contains("Today")
    cy.get(".today-mood-container > :nth-child(2)").contains("😁")
  })
})
