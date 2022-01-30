import { gql } from "@apollo/client"

export const QUERY_USER = gql`
  query fetchUser($token:String!) {
    fetchUser(token:$token) {
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
  query FetchDailyEntries($token:String!) {
    fetchUser(token: $token) {
      
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
  query fetchWeeklyEntries($token:String!) {
    fetchUser(token:$token) {
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
  query fetchMonthlyEntries($token:String!) {
    fetchUser(token:$token) {
      monthlyMoods {
        id
        mood
        createdAt
      }
      monthlyHabits {
        id
        habitId
        date
      }
    }
  }
`

export const QUERY_JOURNAL_ENTRIES = gql`
  query fetchJournalEntries($token:String!) {
    fetchUser(token:$token) {
      id
      journalEntries {
        id
        content
        date
      }
    }
  }
`
