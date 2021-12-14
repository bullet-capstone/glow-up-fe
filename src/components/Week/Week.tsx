import { useState, useEffect, useContext } from "react"
import { useQuery } from "@apollo/client"
import { QUERY_WEEKLY_ENTRIES } from "../../utils/graph_queries"
import { HabitEntry, Mood } from "../../utils/Models"
import WeeklyCard from "../WeeklyCard/WeeklyCard"
import { AppContext } from "../../utils/context"

import "./Week.css"

interface WeeklyStats {
  [key: string]: DayStat
}

interface DayStat {
  mood: number
  habits: HabitEntry[]
}

export default function Week() {
  const { loading, error, data } = useQuery(QUERY_WEEKLY_ENTRIES)
  const [weeklyStats, setWeeklyStats] = useState<WeeklyStats>({})
  const { getDayString } = useContext(AppContext)


  useEffect(() => {
    if (!loading && data) {
      let stats: WeeklyStats = {}
      for (let i = 1; i <= 7; i++) {
        stats[getDayString(i)] = {
          mood: 999,
          habits: []
        }
      }

      const last7Days = Object.keys(stats)

      last7Days.forEach(day => {
        const mood = data.fetchUser.weeklyMoods.find((mood:Mood) => mood.createdAt!.slice(0, 10) === day)
        const habits = data.fetchUser.weeklyHabits.filter((habit:HabitEntry) => habit.date.slice(0, 10) === day)

        if (mood) {
          stats[day].mood = mood.mood
        }

        if (habits.length) {
          stats[day].habits = habits
        }
      })

      setWeeklyStats(stats)
    }
  }, [loading, data, getDayString])

  const weeklyCards = Object.keys(weeklyStats).map((ele: string, index: number) => {
    return (
        <WeeklyCard mood={weeklyStats[ele].mood} habits={weeklyStats[ele].habits} key={index} dayString={ele} />
      )
    }
  )

  if (loading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h1>{error.message}</h1>
  }

  return <div className="weekcard-holder">{weeklyCards}</div>
}
