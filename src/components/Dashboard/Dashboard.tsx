import "./Dashboard.css"
import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AppContext } from "../../utils/context"
import { useQuery } from "@apollo/client"

import { QUERY_DAILY_ENTRIES } from "../../utils/graph_queries"

const Dashboard = () => {
  // const { moodRecorded, habitRecorded } = useContext(AppContext)

  const { loading, error, data } = useQuery(QUERY_DAILY_ENTRIES)

  useEffect(() => {
    if (!loading && data) {
      console.log(data)
    } else {
      console.log("error", error)
    }
  }, [loading, data])

  return (
    <section className="dashboard-container">
      <h2>My Dashboard</h2>
      {/* {data} */}
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
