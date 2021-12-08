import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App/App"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { ContextProvider } from "./utils/context"
import { BrowserRouter as Router } from "react-router-dom"

const client = new ApolloClient({
  uri: "https://glowup-be.herokuapp.com/graphql",
  // uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
