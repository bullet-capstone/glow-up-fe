import React, { createContext, useState, useEffect } from "react"

import { Habit, Mood, HabitMap } from "./Models"
import { useQuery, ApolloError } from "@apollo/client"
import { QUERY_DAILY_ENTRIES } from "../utils/graph_queries"

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
  getDayString: (count: number) => string
  habitMap: HabitMap | null
  dailyQueryError: ApolloError | null
  isMoodSubmitted: boolean
  setIsMoodSubmitted: (submitted: boolean) => void
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
  getDayString: () => "",
  habitMap: null,
  dailyQueryError: null,
  isMoodSubmitted: false,
  setIsMoodSubmitted: () => {},
})

const ContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [userHabits, setUserHabits] = useState<Habit[]>([])
  const [checkedHabitIds, setCheckedHabitIds] = useState<number[]>([])

  const [todaysMood, setTodaysMood] = useState<Mood | null>(null)

  const [todaysHabits, setTodaysHabits] = useState<Habit[]>([])

  const [dailyQueryError, setDailyQueryError] = useState<ApolloError | null>(null)

  const [isMoodSubmitted, setIsMoodSubmitted] = useState(false)

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

  const getDayString = (gap: number) => {
    // gap is a positive integer, meaning x days before today,0 means today
    let day = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24 * gap)
    var dd = String(day.getDate()).padStart(2, "0")
    var mm = String(day.getMonth() + 1).padStart(2, "0") //January is 0!
    var yyyy = day.getFullYear()

    return yyyy + "-" + mm + "-" + dd
  }

  const { loading, error, data, refetch } = useQuery(QUERY_DAILY_ENTRIES)

  useEffect(() => {
    refetch()
    if (!loading && data) {
      setTodaysMood(data.fetchUser.dailyMood)
      setTodaysHabits(data.fetchUser.dailyHabits)
    } else if (error) {
      setDailyQueryError(error)
    }
  }, [loading, data, error, isMoodSubmitted])

  console.log("todaysMood in context", todaysMood)

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
        getDayString,
        habitMap,
        dailyQueryError,
        isMoodSubmitted,
        setIsMoodSubmitted,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
