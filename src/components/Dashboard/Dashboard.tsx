import "./Dashboard.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../../utils/context"
import { QUERY_DAILY_ENTRIES } from "../../utils/graph_queries"

const Dashboard = () => {
  const { moodRecorded, habitRecorded } = useContext(AppContext)

  return (
    <section className="dashboard-container">
      <h2>My Dashboard</h2>
      {moodRecorded ? (
        <div className="daily-mood">🥳 I feel super today</div>
      ) : (
        <Link to="/glow-up-fe/">Enter your mood today!</Link>
      )}
      {habitRecorded ? (
        <div className="daily-habit">Today I've done blah blah</div>
      ) : (
        <Link to="/glow-up-fe/habit-tracker">Enter your habits today!</Link>
      )}
    </section>
  )
}

export default Dashboard
