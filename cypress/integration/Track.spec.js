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
})
