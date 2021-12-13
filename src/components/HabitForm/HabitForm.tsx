import "./HabitForm.css"
import { AppContext } from "../../utils/context"
import { QUERY_HABITS, QUERY_DAILY_ENTRIES } from "../../utils/graph_queries"
import { SUBMIT_HABIT } from "../../utils/graph_mutations"
import { useQuery, useMutation } from "@apollo/client"
import { useContext } from "react"
import HabitCard from "../HabitCard/HabitCard"
import "../../assets/icons/habit7-uncheck.png"
import { Habit } from "../../utils/Models"

const HabitForm = () => {
  const { loading, error, data } = useQuery(QUERY_HABITS)
  const { checkedHabitIds } = useContext(AppContext)
  const [createHabitEntry] = useMutation(SUBMIT_HABIT, {
    refetchQueries: [QUERY_DAILY_ENTRIES, "FetchDailyEntries"],
  })

  const createHabitEntries = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const entryParams = checkedHabitIds.map(ele => ({ id: ele }))
    if (!entryParams.length) {
      alert("No entry today? Tomorrow is another day!")
      createHabitEntry({ variables: { idArr: entryParams } })
    } else {
      createHabitEntry({ variables: { idArr: entryParams } })
      alert("Great job")
    }
  }

  const displayHabits = () => {
    return data.fetchHabits.map((habit: Habit) => (
      <HabitCard
        name={habit.name}
        id={habit.id}
        key={habit.id}
        checkedToday={checkedHabitIds.includes(parseInt(habit.id))}
      />
    ))
  }

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error ? (
        <h2>{`Error! ${error.message}`}</h2>
      ) : (
        <section className="habit-form-container">
          {checkedHabitIds.length ? (
            <h2>Add more habits</h2>
          ) : (
            <h2 className="habit-form-question">No check in yet. Go complete some!</h2>
          )}
          <form className="habit-form" onSubmit={createHabitEntries}>
            {data && displayHabits()}
            <button className="habit-submit-button" type="submit">
              Submit
            </button>
          </form>
        </section>
      )}
    </>
  )
}

export default HabitForm
