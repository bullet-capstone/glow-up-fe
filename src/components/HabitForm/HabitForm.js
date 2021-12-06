import "./HabitForm.css"
import { AppContext } from "../../utils/context.js"
import { QUERY_HABITS } from "../../utils/graph_queries"
import { useQuery } from "@apollo/client"
import { useEffect, useContext } from "react"
import HabitCard from "../HabitCard/HabitCard"
import { useMutation } from "@apollo/client"
import { SUBMIT_HABIT } from "../../utils/graph_mutations"
import "../../assets/icons/habit7-uncheck.png"

const HabitForm = () => {
  const { loading, error, data } = useQuery(QUERY_HABITS)
  const { userHabits, setUserHabits, checkedHabitId } = useContext(AppContext)
  const [createHabitEntry] = useMutation(SUBMIT_HABIT)

  useEffect(() => {
    if (!loading && data) {
      setUserHabits(data.fetchHabit)
    }
  }, [data])

  const habitCards = userHabits.map(habit => <HabitCard name={habit.name} id={habit.id} key={habit.id} />)

  const createHabitEntries = e => {
    e.preventDefault()
    const entryParams = checkedHabitId.map(ele => ({ id: ele }))
    console.log(entryParams)
    if (!entryParams.length) {
      alert("You have not selected any habit")
    } else {
      createHabitEntry({ variables: { idArr: entryParams } })
    }
  }

  return habitCards ? (
    <div className="habit-form-container">
      <form className="habit-form">{habitCards}</form>
      <button className="habit-submit-button" onClick={createHabitEntries}>
        Submit
      </button>
      {/* <img src="../../assets/icons/habit7-uncheck.png" /> */}
    </div>
  ) : (
    <h2>We could not get data at the moment</h2>
  )
}

export default HabitForm
