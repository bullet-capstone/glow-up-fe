import React, { createContext, useState } from "react"
import { Habit } from "./Models"

interface ContextState {
  userHabits: Habit[]
  checkedHabitIds: number[]
  setUserHabits: (habits: Habit[]) => void
  setCheckedHabitIds: (habitIds: number[]) => void
}

const AppContext = createContext<ContextState>({
  userHabits: [],
  checkedHabitIds: [],
  setUserHabits: () => {},
  setCheckedHabitIds: () => {},
})

const ContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [userHabits, setUserHabits] = useState<Habit[]>([])
  const [checkedHabitIds, setCheckedHabitIds] = useState<number[]>([])

  return (
    <AppContext.Provider value={{ userHabits, setUserHabits, checkedHabitIds, setCheckedHabitIds }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
