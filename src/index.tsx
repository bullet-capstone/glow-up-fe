import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App/App"
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client"
import { ContextProvider } from "./utils/context"
import { BrowserRouter } from "react-router-dom"
import { CookiesProvider } from "react-cookie";
import { gql } from "@apollo/client"
import { useCookies } from "react-cookie";
import { setContext } from '@apollo/client/link/context';


// const [cookie,]= useCookies(['userToken'])
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = cookie.userToken;
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   };
// });

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  // uri: "https://glowup-be.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  // link: authLink.concat(httpLink),
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Credentials': true,
  // }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ContextProvider>
          <CookiesProvider>
          <App />
          </CookiesProvider>
        </ContextProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
