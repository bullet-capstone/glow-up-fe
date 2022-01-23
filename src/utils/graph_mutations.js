import { gql } from "@apollo/client"

export const SUBMIT_MOOD = gql`
  mutation CreateMood($mood: Int!, $description: String) {
    createMood(input: { params: { mood: $mood, description: $description } }) {
      user {
        id
      }
    }
  }
`

export const SUBMIT_HABIT = gql`
  mutation AddHabitEntries($idArr: [HabitEntryInput!]!) {
    createHabitEntry(input: { params: $idArr }) {
      user {
        dailyHabits {
          id
          name
        }
      }
    }
  }
`

export const SUBMIT_JOURNAL_ENTRY = gql`
  mutation createJournalEntry($content: String!) {
    createJournalEntry(input: { params: { content: $content } }) {
      user {
        journalEntries {
          id
          content
          date
        }
      }
    }
  }
`
export const SIGNUP_USER = gql`
  mutation createUser($username:String!,$email:String!, $password:String!,$passwordConfirmation:String!) {
    createUser(input: { params: { username: $username, email:$email, password:$password,passwordConfirmation:$passwordConfirmation} }) {
      token 
    }
  }
`