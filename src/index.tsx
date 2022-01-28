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
        <CookiesProvider>
          <ContextProvider>
            <App />
          </ContextProvider>
        </CookiesProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
