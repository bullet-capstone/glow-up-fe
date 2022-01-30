import React, { createContext, useState, useEffect } from "react"

import { Habit, Mood, HabitMap } from "./Models"
import { useQuery,} from "@apollo/client"
import { QUERY_HABITS} from "../utils/graph_queries"


interface ContextState {
  checkedHabitIds: number[]
  setCheckedHabitIds: (habitIds: number[]) => void
  todaysMood: Mood | null
  setTodaysMood: (mood: Mood) => void
  todaysHabits: Habit[]
  setTodaysHabits: (habits: Habit[]) => void
  displayMood: (mood: number) => string
  getDayString: (count: number) => string
  habitMap: HabitMap | null
  habitList:Habit[]
}

const AppContext = createContext<ContextState>({
  checkedHabitIds: [],
  setCheckedHabitIds: () => {},
  todaysMood: null,
  setTodaysMood: () => {},
  todaysHabits: [],
  setTodaysHabits: () => {},
  displayMood: () => "",
  getDayString: () => "",
  habitMap: null,
  habitList:[]

})

const ContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [checkedHabitIds, setCheckedHabitIds] = useState<number[]>([])

  const [todaysMood, setTodaysMood] = useState<Mood | null>(null)

  const [todaysHabits, setTodaysHabits] = useState<Habit[]>([])

  const [habitList, setHabitList] = useState([]);



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

    return `${mm}/${dd}/${yyyy}`
  }
  

  const {loading, error, data } = useQuery(QUERY_HABITS)
 
  useEffect(() => {
    if (!loading && data) {
      setHabitList(data.fetchHabits)
      
    } else if (error) {
      console.log('context query error');
      
    }
  }, [loading, data, error])

  return (
    <AppContext.Provider
      value={{
        checkedHabitIds,
        setCheckedHabitIds,
        todaysMood,
        setTodaysMood,
        todaysHabits,
        setTodaysHabits,
        displayMood,
        getDayString,
        habitMap,
        habitList
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
