import { useState, useEffect, useContext } from "react"
import { useQuery } from "@apollo/client"
import { QUERY_WEEKLY_ENTRIES } from "../../utils/graph_queries"
import { HabitEntry, Mood } from "../../utils/Models"
import WeeklyCard from "../WeeklyCard/WeeklyCard"
import { AppContext } from "../../utils/context"

import "./Week.css"

export default function Week() {
  const { loading, error, data } = useQuery(QUERY_WEEKLY_ENTRIES)
  const [weeklyStats, setWeeklyStats] = useState([])
  const { getDayString } = useContext(AppContext)

  interface DayStat {
    mood: Mood
    habits: HabitEntry[]
  }

  useEffect(() => {
    if (!loading && data) {
      const orderedHabits: HabitEntry[][] = []
      // Keep below comments to see how server time is ahead of us
      // let today = new Date()
      // let todayString = today.toISOString()
      // console.log("today", todayString)

      for (let i = 1; i <= 7; i++) {
        let dayString = getDayString(i)
        // console.log("daystring in week", dayString)

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

      //below log to check grouped habits by day
      // console.log("final", final)
      setWeeklyStats(final)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data])

  const makeCards = () => {
    const weeklyCards = weeklyStats.map((ele: DayStat, index: number) => (
      <WeeklyCard mood={ele.mood.mood} habits={ele.habits} key={index} dayString={getDayString(index + 1)} />
    ))

    return weeklyCards
  }

  if (loading) return <h1>Loading</h1>
  if (error) return <h1>{error.message}</h1>

  return <div className="weekcard-holder">{makeCards()}</div>
}
