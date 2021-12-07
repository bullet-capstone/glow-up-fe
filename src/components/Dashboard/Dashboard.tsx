import "./Dashboard.css"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../utils/context"
import { useQuery } from "@apollo/client"

import { QUERY_DAILY_ENTRIES } from "../../utils/graph_queries"
import { Habit, Mood } from "../../utils/Models"

const Dashboard = () => {
  // const { moodRecorded, habitRecorded } = useContext(AppContext)

  const { loading, error, data } = useQuery(QUERY_DAILY_ENTRIES)
  const [ todaysMood, setTodaysMood ] = useState<Mood | null>(null)
  const [ habits, setHabits ] = useState<Habit[] >([])

  useEffect(() => {
    if (!loading && data) {
      setTodaysMood(data.fetchUser.dailyMood)
      setHabits(data.fetchUser.dailyHabits)
    } else {
      console.log("error", error)
    }
  }, [loading, data])

  const displayMood = () => {
    if (todaysMood) {
      switch (todaysMood.mood) {
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
  }

  const displayHabit = () => {
    const completedHabits = habits.map((habit: Habit) => <p>✅ {habit.name}</p>)

    return completedHabits
  }

  const today = new Date()
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  const date = mm + '/' + dd + '/' + yyyy;

  return (
  <main>
    <section className="dashboard-container">
      <h2 className="page-title">My Dashboard</h2>
      { false ? (
        <article className="today-container">
          <div>
            <h3>Today {date}</h3>
            <p>I am feeling: {displayMood()}</p>
            {// { todaysMood && todaysMood.description && (<p>{todaysMood.description}</p>)}
          }
          </div>
          <div className="completed-habits">
            <h4>Habits I completed:</h4>
            {displayHabit()}
            <Link to="/glow-up-fe/habit-tracker">➕ Add more habits</Link>
          </div>
        </article>
      ):
      (
        <>
          <Link to="/glow-up-fe/">➕ Enter your mood today!</Link>
          <Link to="/glow-up-fe/habit-tracker">➕ Enter your habits!</Link>
        </>
      )
      }
    </section>
    <section className="week-container">
      <h3>This week...</h3>
    </section>
  </main>
  )
}

export default Dashboard

/* {moodRecorded ? (
  <div className="daily-mood">🥳 I feel super today</div>
) : (
  <Link to="/glow-up-fe/">Enter your mood today!</Link>
)}
{habitRecorded ? (
  <div className="daily-habit">Today I've done blah blah</div>
) : (
  <Link to="/glow-up-fe/habit-tracker">Enter your habits today!</Link>
)} */
