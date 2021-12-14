import { gql } from "@apollo/client"

export const QUERY_USER = gql`
  query fetchUser {
    fetchUser {
      id
      username
    }
  }
`
export const QUERY_HABITS = gql`
  query FetchHabits {
    fetchHabits {
      id
      name
    }
  }
`
export const QUERY_DAILY_ENTRIES = gql`
  query FetchDailyEntries {
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
  query fetchWeeklyEntries {
    fetchUser {
      weeklyHabits {
        habitId
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
  query fetchMonthlyEntries {
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

export const QUERY_JOURNAL_ENTRIES = gql`
  query fetchJournalEntries {
    fetchUser {
      id
      journalEntries {
        id
        content
        date
      }
    }
  }
`
