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
  displayHabit: (habit: number) => string
  getDayString: (count: number) => string
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
  displayHabit: () => "",
  getDayString: () => "",
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
  const displayHabit = (habit: number) => {
    switch (habit) {
      case 1:
        return "Exercise"
      case 2:
        return "Meditate"
      case 3:
        return "Floss"
      case 4:
        return "Brush teeth x2"
      case 5:
        return "Drink Water"
      case 6:
        return "Socialize"
      case 7:
        return "Eat Healthy"
      case 8:
        return "Wash Dishes"
      case 9:
        return "Write in Journal"
      case 10:
        return "Take a Shower"
      case 11:
        return "Stay off Social Media"
      case 12:
        return "Make Bed"
      case 13:
        return "Read"
      case 14:
        return "Go Outside"
      case 15:
        return "Plan Tomorrow"

      default:
        return "❓"
    }
  }

  const getDayString = (gap: number) => {
    let day = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24 * gap)
    // let dayString = day.toISOString().slice(0, 10)
    var dd = String(day.getDate()).padStart(2, "0")
    var mm = String(day.getMonth() + 1).padStart(2, "0") //January is 0!
    var yyyy = day.getFullYear()

    return mm + "/" + dd + "/" + yyyy
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
        displayHabit,
        getDayString,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
