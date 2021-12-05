import { createContext, useState, useEffect } from "react"

const AppContext = createContext()

const ContextProvider = props => {
  const [userHabits, setUserHabits] = useState([])

  return <AppContext.Provider value={{ userHabits, setUserHabits }}>{props.children}</AppContext.Provider>
}

export { AppContext, ContextProvider }