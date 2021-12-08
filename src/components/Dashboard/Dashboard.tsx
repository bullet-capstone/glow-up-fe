import "./Dashboard.css"
import { Link } from "react-router-dom"
import { useEffect, useContext } from "react"
import { AppContext } from "../../utils/context"
import MonthlyGraphs from "../MonthlyGraphs/MonthlyGraphs"
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
    const completedHabits = todaysHabits!.map((habit: Habit) =>
      <p className="completed-habit" key={habit.id}>
        <span className="material-icons check-icon">
          done
        </span>
        {habit.name}
      </p>)

    return completedHabits
  }

  return (
    <main>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{`Error! ${error.message}`}</h2>}
      <section className="dashboard-container">
        <h2 className="page-title">My Dashboard</h2>
        <p className="page-quote">"Every action you take is a vote for the type of person you wish to become."</p>
        <p className="page-quote">― James Clear</p>
      </section>
      <article className="today-container">
        {todaysMood ? <MoodToday /> : <Link to="/glow-up-fe/track">➕ Enter your mood today!</Link>}
        {todaysHabits.length ? (
          <div className="completed-habits-container">
            <h4>Habits I completed:</h4>
            <div className="completed-habits">
              {displayHabit()}
            </div>
            <Link to="/glow-up-fe/track">➕ Add more habits</Link>
          </div>
        ) : (
          <Link to="/glow-up-fe/track">➕ Enter your habits!</Link>
        )}
      </article>
      <section className="week-container">
        <h3>This week...</h3>
      </section>
      <MonthlyGraphs />
    </main>
  )
}

export default Dashboard
