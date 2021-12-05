import "./HabitForm.css"
import { AppContext } from "../../utils/context.js"
import { useContext } from "react"

const HabitForm = () => {
  const { userHabits, setUserHabits } = useContext(AppContext)
  const data = [
    { id: 1, name: "Exercise" },
    { id: 2, name: "Exercise" },
    { id: 3, name: "Exercise" },
    { id: 4, name: "Exercise" },
    { id: 5, name: "Exercise" },
    { id: 6, name: "Exercise" },
    { id: 7, name: "Exercise" },
    { id: 8, name: "Exercise" },
    { id: 9, name: "Exercise" },
    { id: 10, name: "Exercise" },
    { id: 11, name: "Exercise" },
    { id: 12, name: "Exercise" },
    { id: 13, name: "Exercise" },
    { id: 14, name: "Exercise" },
    { id: 15, name: "Exercise" },
  ]

  setUserHabits(data)

  return <div className="habit-form-container"></div>
}

export default HabitForm
