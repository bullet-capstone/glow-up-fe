import "./Dashboard.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../../utils/context"
import MonthlyGraphs from "../MonthlyGraphs/MonthlyGraphs"
import { Habit } from "../../utils/Models"
import MoodToday from "../MoodToday/MoodToday"
import Week from "../Week/Week"
  
const Dashboard = () => {
  const { todaysMood, todaysHabits } = useContext(AppContext)

  const displayHabit = () => {
    const completedHabits = todaysHabits!.map((habit: Habit) => (
      <p className="completed-habit" key={habit.id}>
        <span className="material-icons check-icon">done</span>
        {habit.name}
      </p>
    ))

    return completedHabits
  }

  return (
    <main>
      <section className="dashboard-container">
        <h2 className="page-title">My Dashboard</h2>
        <div>
          <p className="page-quote">"Every action you take is a vote for the type of person you wish to become."</p>
          <p className="page-quote author">― James Clear</p>
        </div>
      </section>
      <article className="today-container">
        {todaysMood ? <MoodToday /> : <Link to="/glow-up-fe/track">➕ Enter your mood today!</Link>}
        {todaysHabits.length ? (
          <div className="completed-habits-container">
            <h4>Habits I completed:</h4>
            <div className="completed-habits">{displayHabit()}</div>
            <Link to="/glow-up-fe/track">➕ Edit habits</Link>
          </div>
        ) : (
          <Link to="/glow-up-fe/track">➕ Enter your habits!</Link>
        )}
      </article>
      <section className="week-container">
        <h3 className="week-title">This week</h3>
        <Week />
      </section>
      <MonthlyGraphs />
    </main>
  )
}

export default Dashboard
