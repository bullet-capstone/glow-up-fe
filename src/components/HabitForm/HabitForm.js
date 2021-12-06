import "./HabitForm.css"
import { AppContext } from "../../utils/context.js"
import { QUERY_HABITS } from "../../utils/graph_queries"
import { useQuery } from "@apollo/client"
import { useEffect, useContext } from "react"
import HabitCard from "../HabitCard/HabitCard"

const HabitForm = () => {
  const { loading, error, data } = useQuery(QUERY_HABITS)
  const { userHabits, setUserHabits } = useContext(AppContext)

  useEffect(() => {
    if (!loading && data) {
      setUserHabits(data.fetchHabit)
    }
  }, [data])

  const habitCards = userHabits.map(habit => <HabitCard name={habit.name} id={habit.id} key={habit.id} />)

  return habitCards ? (
    <div className="habit-form-container">
      <form className="habit-form">{habitCards}</form>
      <button className="habit-submit-button">Submit</button>
    </div>
  ) : (
    <h2>We could not get data at the moment</h2>
  )
}

export default HabitForm
