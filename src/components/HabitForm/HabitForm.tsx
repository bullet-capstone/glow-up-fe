import "./HabitForm.css"
import { AppContext } from "../../utils/context.js"
import { useContext } from "react"
import HabitCard from "../HabitCard/HabitCard"

const HabitForm = () => {
  // const { userHabits, setUserHabits } = useContext(AppContext)
  const habitData = [
    { id: 1, name: "Exercise" },
    { id: 2, name: "Meditate" },
    { id: 3, name: "Floss" },
    { id: 4, name: "Brush Teeth x2" },
    { id: 5, name: "Drink Water" },
    { id: 6, name: "Socialize" },
    { id: 7, name: "Eat Health" },
    { id: 8, name: "Wash Dishes" },
    { id: 9, name: "Write" },
    { id: 10, name: "Shower" },
    { id: 11, name: "Less Social Media" },
    { id: 12, name: "Make Bed" },
    { id: 13, name: "Read" },
    { id: 14, name: "Go Outside" },
    { id: 15, name: "Plan Tomorrow" },
  ]

  // setUserHabits(data)

  const habitCards = habitData.map(habit => <HabitCard name={habit.name} id={habit.id} key={habit.id} />)

  return (
    <div className="habit-form-container">
      <form className="habit-form">
        {/* <HabitCard name="Excercise" />
        <HabitCard name="Meditate" /> */}

        {habitCards}
      </form>
      <button className="habit-submit-button">Submit</button>
    </div>
  )
}

export default HabitForm
