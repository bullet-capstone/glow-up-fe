import "./Dashboard.css"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import { AppContext } from "../../utils/context"
import MonthlyGraphs from "../MonthlyGraphs/MonthlyGraphs"
import { Habit } from "../../utils/Models"
import MoodToday from "../MoodToday/MoodToday"
import Week from "../Week/Week"
import HabitGraph from '../HabitGraph/HabitGraph';
import { useQuery, ApolloError, } from "@apollo/client"
import { QUERY_DAILY_ENTRIES } from "../../utils/graph_queries"
import { useCookies } from "react-cookie";
;

  
const Dashboard = () => {
  // const { todaysMood, todaysHabits } = useContext(AppContext)
  const [cookie,]= useCookies(['userToken'])
  const [todaysMood, setTodaysMood] = useState(null);
  const [todaysHabits, setTodaysHabits] = useState([]);

  const { loading, error, data } = useQuery(QUERY_DAILY_ENTRIES,{variables: {token: cookie.userToken}})
  useEffect(() => {
    if (!loading && data) {
      setTodaysMood(data.fetchUser.dailyMood)
      setTodaysHabits(data.fetchUser.dailyHabits)
    } else if (error) {
      console.log('query error');
      
    }
  }, [loading, data, error])

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
        {todaysMood ? <MoodToday mt={todaysMood}/> : <Link to="/glow-up-fe/track">➕ Enter your mood today!</Link>}
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
      <HabitGraph />
    </main>
  )
}

export default Dashboard
