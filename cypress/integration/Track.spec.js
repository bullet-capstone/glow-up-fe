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
    cy.get(".today-mood-container > h3").contains("Today")
    cy.get(".today-mood-container").children().eq(2).contains("😁")
  })
})
