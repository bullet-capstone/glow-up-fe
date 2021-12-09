import React, { createContext, useState } from "react"

import { Habit, Mood, HabitMap } from "./Models"

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
  habitMap: HabitMap | null
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
  habitMap: null,
})

const ContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [userHabits, setUserHabits] = useState<Habit[]>([])
  const [checkedHabitIds, setCheckedHabitIds] = useState<number[]>([])

  const [todaysMood, setTodaysMood] = useState<Mood | null>(null)

  const [todaysHabits, setTodaysHabits] = useState<Habit[]>([])

  const [habitMap] = useState({
    1: "Exercise",
    2: "Meditate",
    3: "Floss",
    4: "Brush teeth x2",
    5: "Drink Water",
    6: "Socialize",
    7: "Eat Healthy",
    8: "Wash Dishes",
    9: "Write in Journal",
    10: "Take a Shower",
    11: "Stay off Social Media",
    12: "Make Bed",
    13: "Read",
    14: "Go Outside",
    15: "Plan Tomorrow",
  })

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
    var dd = String(day.getDate()).padStart(2, "0")
    var mm = String(day.getMonth() + 1).padStart(2, "0") //January is 0!
    var yyyy = day.getFullYear()

    return yyyy + "-" + mm + "-" + dd
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
        habitMap,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
