import { gql } from "@apollo/client"

export const QUERY_USER = gql`
  query fetchUser {
    fetchUser {
      id
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
export const QUERY_DAILY_ENTRIES = gql`
  query fetchUser {
    fetchUser {
      id
      dailyMood {
        id
        mood
        description
      }

      dailyHabits {
        id
        name
      }
    }
  }
`
export const QUERY_WEEKLY_ENTRIES = gql`
  query fetchUser {
    fetchUser {
      weeklyHabits {
        habitId
        status
        date
        id
      }
      weeklyMoods {
        createdAt
        mood
      }
    }
  }
`

export const QUERY_MONTHLY_ENTRIES = gql`
  query fetchUser {
    fetchUser {
      id
      monthlyMoods {
        id
        createdAt
        mood
      }
    }
  }
`
