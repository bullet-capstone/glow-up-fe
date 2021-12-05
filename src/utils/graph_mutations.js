import { gql } from '@apollo/client';

export const SUBMIT_MOOD = gql`
mutation createMood($mood: Int!, $description: String) {
  createMood(
    input: {
      params: {
        mood: $mood,
        description: $description
      }
    }
  ) {
    user {
      id
    }
  }
}
`
