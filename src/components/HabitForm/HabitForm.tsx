import "./HabitForm.css"
import { AppContext } from "../../utils/context"
import { QUERY_HABITS } from "../../utils/graph_queries"
import { SUBMIT_HABIT } from "../../utils/graph_mutations"
import { useQuery, useMutation } from "@apollo/client"
import { useEffect, useContext } from "react"
import HabitCard from "../HabitCard/HabitCard"
import "../../assets/icons/habit7-uncheck.png"

const HabitForm = () => {
  const { loading, error, data } = useQuery(QUERY_HABITS)
  const { userHabits, setUserHabits, checkedHabitIds } = useContext(AppContext)
  const [createHabitEntry] = useMutation(SUBMIT_HABIT)

  useEffect(() => {
    if (!loading && data) {
      setUserHabits(data.fetchHabits)
    }
  }, [data, loading])

  const createHabitEntries = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const entryParams = checkedHabitIds.map(ele => ({ id: ele }))
    if (!entryParams.length) {
      alert("You have not selected any habit")
    } else {
      createHabitEntry({ variables: { idArr: entryParams } })
      alert("Great job")
    }
  }

  return userHabits ? (
    <section className="habit-form-container">
      <h2 className="habit-form-question">What have you accomplished?</h2>
      <form className="habit-form" onSubmit={createHabitEntries}>
        {userHabits.map(habit => (
          <HabitCard name={habit.name} id={habit.id} key={habit.id} />
        ))}
      </form>
      <button className="habit-submit-button" type="submit">
        Submit
      </button>
    </section>
  ) : (
    <h2>{error}</h2>
  )
}

export default HabitForm
