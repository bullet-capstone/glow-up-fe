import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App/App"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { ContextProvider } from "./utils/context"
import { BrowserRouter } from "react-router-dom"
import { CookiesProvider } from "react-cookie";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  // uri: "https://glowup-be.herokuapp.com/graphql",
  cache: new InMemoryCache(),
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
