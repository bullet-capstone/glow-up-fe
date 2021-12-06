import { gql } from "@apollo/client"

export const QUERY_USER = gql`
  query fetchUser {
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
export const QUERY_HABITS = gql`
  query fetchHabits {
    fetchHabits {
      id
      name
    }
  }
`
