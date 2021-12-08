import React, { createContext, useState } from "react"

import { Habit, Mood } from "./Models"

interface ContextState {
  userHabits: Habit[]
  setUserHabits: (habits: Habit[]) => void
  checkedHabitIds: number[]
  setCheckedHabitIds: (habitIds: number[]) => void
  todaysMood: Mood | null
  setTodaysMood: (mood: Mood) => void
  todaysHabits: Habit[]
  setTodaysHabits: (habits: Habit[]) => void
  displayMood: (mood: number) => string
}

const AppContext = createContext<ContextState>({
  userHabits: [],
  setUserHabits: () => {},
  checkedHabitIds: [],
  setCheckedHabitIds: () => {},
  todaysMood: null,
  setTodaysMood: () => {},
  todaysHabits: [],
  setTodaysHabits: () => {},
  displayMood: () => "",
})

const ContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [userHabits, setUserHabits] = useState<Habit[]>([])
  const [checkedHabitIds, setCheckedHabitIds] = useState<number[]>([])

  const [todaysMood, setTodaysMood] = useState<Mood | null>(null)

  const [todaysHabits, setTodaysHabits] = useState<Habit[]>([])

  const displayMood = (mood: number) => {
    switch (mood) {
      case 0:
        return "😭"
      case 1:
        return "🙁"
      case 2:
        return "😐"
      case 3:
        return "🙂"
      case 4:
        return "😁"

      default:
        return "❓"
    }
  }

  return (
    <AppContext.Provider
      value={{
        userHabits,
        setUserHabits,
        checkedHabitIds,
        setCheckedHabitIds,
        todaysMood,
        setTodaysMood,
        todaysHabits,
        setTodaysHabits,
        displayMood,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
