import "./Dashboard.css"
import { Link } from "react-router-dom"
import { useEffect, useContext } from "react"
import { AppContext } from "../../utils/context"
import { useQuery } from "@apollo/client"
import { QUERY_DAILY_ENTRIES } from "../../utils/graph_queries"
import { Habit } from "../../utils/Models"
import MoodToday from "../MoodToday/MoodToday"

const Dashboard = () => {
  const { todaysMood, setTodaysMood, todaysHabits, setTodaysHabits } = useContext(AppContext)

  const { loading, error, data, refetch } = useQuery(QUERY_DAILY_ENTRIES)

  useEffect(() => {
    refetch()
    if (!loading && data) {
      setTodaysMood(data.fetchUser.dailyMood)
      setTodaysHabits(data.fetchUser.dailyHabits)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data])

  const displayHabit = () => {
    const completedHabits = todaysHabits!.map((habit: Habit) => <p key={habit.id}>✅ {habit.name}</p>)

    return completedHabits
  }

  return (
    <main>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{`Error! ${error.message}`}</h2>}
      <section className="dashboard-container">
        <h2 className="page-title">My Dashboard</h2>
        <article className="today-container">
          {todaysMood ? <MoodToday /> : <Link to="/glow-up-fe/track">➕ Enter your mood today!</Link>}
          {todaysHabits.length ? (
            <div className="completed-habits">
              <h4>Habits I completed:</h4>
              {displayHabit()}
              <Link to="/glow-up-fe/track">➕ Add more habits</Link>
            </div>
          ) : (
            <Link to="/glow-up-fe/track">➕ Enter your habits!</Link>
          )}
        </article>
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
