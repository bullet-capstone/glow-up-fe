import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client"
import { QUERY_WEEKLY_ENTRIES } from "../../utils/graph_queries"
import { HabitEntry, Mood } from "../../utils/Models"
import WeeklyCard from "../WeeklyCard/WeeklyCard"

export default function Week() {
  const { loading, error, data } = useQuery(QUERY_WEEKLY_ENTRIES)
  const [weeklyStats, setWeeklyStats] = useState([])
  // const [weeklyHabits, setWeeklyHabits] = useState([])

  interface DayStat {
    mood: Mood
    habits: HabitEntry[]
  }

  useEffect(() => {
    if (!loading && data) {
      const orderedHabits: HabitEntry[][] = []
      for (let i = 1; i <= 7; i++) {
        let day = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24 * i)
        let dayString = day.toISOString().slice(0, 10)
        let dayHabits: HabitEntry[] = data.fetchUser.weeklyHabits.filter(
          (habit: HabitEntry) => habit.date.slice(0, 10) === dayString
        )

        orderedHabits.push(dayHabits)
      }

      const final = data.fetchUser.weeklyMoods.reduce((acc: DayStat[], ele: Mood, index: number) => {
        let temp: DayStat = {
          mood: ele,
          habits: orderedHabits[index],
        }
        acc.push(temp)
        return acc
      }, [])

      console.log("final", final)
      setWeeklyStats(final)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data])

  const makeCards = () => {
    const weeklyCards = weeklyStats.map((ele: DayStat) => <WeeklyCard mood={ele.mood.mood} habits={ele.habits} />)

    return weeklyCards
  }

  return <div>{makeCards()}</div>
}
