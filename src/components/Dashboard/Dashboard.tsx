import "./Dashboard.css"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../utils/context"
import { useQuery } from "@apollo/client"

import { QUERY_DAILY_ENTRIES } from "../../utils/graph_queries"
import { Habit, Mood, HabitEntry } from "../../utils/Models"

const Dashboard = () => {
  // const { moodRecorded, habitRecorded } = useContext(AppContext)
  const [todaysMood, setTodaysMood] = useState<Mood | null>(null)

  const [todaysHabits, setTodaysHabits] = useState<Habit[] | null>(null)

  const { loading, error, data } = useQuery(QUERY_DAILY_ENTRIES)

  useEffect(() => {
    if (!loading && data) {
      setTodaysMood(data.fetchUser.dailyMood)
      setTodaysHabits(data.fetchUser.dailyHabits)
    } else {
      console.log("error", error)
    }
  }, [loading, data])

  const displayMood = () => {
    switch (todaysMood!.mood) {
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

  const displayHabit = () => {
    const completedHabits = todaysHabits!.map((habit: Habit) => <p>{habit.name}</p>)
    return completedHabits
  }

  return (
    <section className="dashboard-container">
      <h2>My Dashboard</h2>
      {todaysMood && <p>{displayMood()}</p>}

      {todaysHabits && <div className="completed-habits">{displayHabit()}</div>}
      {/* {moodRecorded ? (
        <div className="daily-mood">🥳 I feel super today</div>
      ) : (
        <Link to="/glow-up-fe/">Enter your mood today!</Link>
      )}
      {habitRecorded ? (
        <div className="daily-habit">Today I've done blah blah</div>
      ) : (
        <Link to="/glow-up-fe/habit-tracker">Enter your habits today!</Link>
      )} */}
    </section>
  )
}

export default Dashboard
