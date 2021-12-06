import "./HabitForm.css"
import { AppContext } from "../../utils/context"
import { QUERY_HABITS } from "../../utils/graph_queries"
import { SUBMIT_HABIT } from "../../utils/graph_mutations"
import { useQuery, useMutation } from "@apollo/client"
import { useContext } from "react"
import HabitCard from "../HabitCard/HabitCard"
import "../../assets/icons/habit7-uncheck.png"
import { Habit } from "../../utils/Models"

const HabitForm = () => {
  const { error, data } = useQuery(QUERY_HABITS)
  const { checkedHabitIds } = useContext(AppContext)
  const [createHabitEntry] = useMutation(SUBMIT_HABIT)

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

  return (
    <section className="habit-form-container">
      <h2 className="habit-form-question">What have you accomplished?</h2>
      {data ? (
        <form className="habit-form" onSubmit={createHabitEntries}>
          {data.fetchHabits.map((habit: Habit) => (
            <HabitCard name={habit.name} id={habit.id} key={habit.id} />
          ))}
          <button className="habit-submit-button" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <h2>{error}</h2>
      )}
    </section>
  )
}

export default HabitForm
