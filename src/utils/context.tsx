import React, { createContext, useState } from "react"
import { Habit, Mood } from "./Models"

interface ContextState {
  userHabits: Habit[]
  setUserHabits: (habits: Habit[]) => void
  checkedHabitIds: number[]
  setCheckedHabitIds: (habitIds: number[]) => void
  moodRecorded: boolean
  setMoodRecorded: (moodRecorded: boolean) => void
  habitRecorded: boolean
  setHabitRecorded: (habitRecorded: boolean) => void
}

const AppContext = createContext<ContextState>({
  userHabits: [],
  setUserHabits: () => {},
  checkedHabitIds: [],
  setCheckedHabitIds: () => {},
  moodRecorded: false,
  setMoodRecorded: () => {},
  habitRecorded: false,
  setHabitRecorded: () => {},
})

const ContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [userHabits, setUserHabits] = useState<Habit[]>([])
  const [checkedHabitIds, setCheckedHabitIds] = useState<number[]>([])

  const [moodRecorded, setMoodRecorded] = useState<boolean>(false)
  const [habitRecorded, setHabitRecorded] = useState<boolean>(false)

  const [todaysMood, setTodaysMood] = useState<Mood>(null)

  return (
    <AppContext.Provider
      value={{
        userHabits,
        setUserHabits,
        checkedHabitIds,
        setCheckedHabitIds,
        moodRecorded,
        setMoodRecorded,
        habitRecorded,
        setHabitRecorded,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
