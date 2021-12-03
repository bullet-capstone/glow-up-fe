import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query {
  fetchUser {
    username

    moods {
      id
      description
      mood
      createdAt
    }

    habitEntries {
      id
      date
      habitId
      status
    }

    journalEntries {
      id
      content
      date
    }
  }
}
`
