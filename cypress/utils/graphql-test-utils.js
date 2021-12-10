import mockUserData from '../fixtures/mockUserData.json'

// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (req, operationName) => {
  const { body } = req
  return (
    body.hasOwnProperty('operationName') && body.operationName === operationName
  )
}

// Alias query if operationName matches
export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName) && operationName === 'fetchUser') {
    req.alias = `gql${operationName}Query`

    req.reply(res => {
     res.body = mockUserData;
    });
  }

  if (hasOperationName(req, operationName) && operationName === 'fetchHabits') {
    req.alias = `gql${operationName}Query`

    req.reply(res => {
     res.body = mockUserData;
    });
  }
}
