import { gql } from "@apollo/client"

export const SUBMIT_MOOD = gql`
  mutation CreateMood($mood: Int!, $description: String,$userToken: String!) {
    createMood(input: { 
      params: { mood: $mood, description: $description }, userToken: $userToken 
    }) {
      user {
        id
      }
    }
  }
`
export const SUBMIT_HABIT = gql`
  mutation AddHabitEntries($idArr: [HabitEntryInput!]!,$userToken: String!) {
    createHabitEntry(input: { params: $idArr, userToken: $userToken }) {
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
  mutation createJournalEntry($content: String!,$userToken: String!) {
    createJournalEntry(input: { params: { content: $content }, userToken: $userToken }) {
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
  mutation createUser($username:String!,$email: String!, $password: String!,$passwordConfirmation: String!) {
    createUser(input: { params: { username: $username, email: $email, password:$password,passwordConfirmation: $passwordConfirmation } }) {
      token 
    }
  }
`

export const SIGNIN_USER = gql`
  mutation signIn($username:String!, $password:String!) {
    signInUser(input: { params: { username: $username, password:$password}}) {
      token 
    }
  }
`