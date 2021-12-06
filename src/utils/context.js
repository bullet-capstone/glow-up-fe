import { createContext, useState } from "react"

const AppContext = createContext({})

const ContextProvider = props => {
  const [userHabits, setUserHabits] = useState([])
  const [checkedHabitId, setCheckedHabitId] = useState([])
  const [habitSubmitted, setHabitSubmitted] = useState(false)

  return (
    <AppContext.Provider
      value={{ userHabits, setUserHabits, checkedHabitId, setCheckedHabitId, habitSubmitted, setHabitSubmitted }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
