import "./HabitForm.css"
import { AppContext } from "../../utils/context.js"
import { QUERY_HABITS } from "../../utils/graph_queries"
import { useQuery } from "@apollo/client"
import { useEffect, useContext, useState } from "react"
import HabitCard from "../HabitCard/HabitCard"
import { useMutation } from "@apollo/client"
import { SUBMIT_HABIT } from "../../utils/graph_mutations"
import "../../assets/icons/habit7-uncheck.png"

const HabitForm = () => {
  const { loading, error, data } = useQuery(QUERY_HABITS)
  const { userHabits, setUserHabits, checkedHabitId, habitSubmitted, setHabitSubmitted } = useContext(AppContext)
  const [createHabitEntry] = useMutation(SUBMIT_HABIT)

  // const [checkedCards, setCheckedCards] = useState([])

  useEffect(() => {
    if (!loading && data) {
      setUserHabits(data.fetchHabit)
    }
  }, [data])

  // useEffect(() => {
  //   const checkedHabits = checkedHabitId.map(ele => {
  //     return userHabits.find(habit => habit.id === ele)
  //   })
  //   const checkedHabitCards = checkedHabits.map(habit => <HabitCard name={habit.name} id={habit.id} key={habit.id} />)
  //   setCheckedCards(checkedHabitCards)
  // }, [checkedHabitId])

  const habitCards = userHabits.map(habit => <HabitCard name={habit.name} id={habit.id} key={habit.id} />)

  const createHabitEntries = e => {
    e.preventDefault()
    const entryParams = checkedHabitId.map(ele => ({ id: ele }))
    if (!entryParams.length) {
      alert("You have not selected any habit")
    } else {
      createHabitEntry({ variables: { idArr: entryParams } })
      alert("Great job")
      // setHabitSubmitted(true)
    }
  }

  return habitCards ? (
    <div className="habit-form-container">
      <h2>What have you accomplished?</h2>

      <form className="habit-form"> {habitCards}</form>

      <button className="habit-submit-button" onClick={createHabitEntries}>
        Submit
      </button>
    </div>
  ) : (
    <h2>We could not get data at the moment</h2>
  )
}

export default HabitForm
