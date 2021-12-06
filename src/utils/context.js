import { createContext, useState } from "react"

const AppContext = createContext({})

const ContextProvider = props => {
  const [userHabits, setUserHabits] = useState([])
  const [checkedHabitIds, setCheckedHabitIds] = useState([])
  const [habitSubmitted, setHabitSubmitted] = useState(false)

  return (
    <AppContext.Provider
      value={{ userHabits, setUserHabits, checkedHabitIds, setCheckedHabitIds, habitSubmitted, setHabitSubmitted }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
