import { useContext } from "react"
import { AppContext } from "../../utils/context"
<<<<<<< HEAD
import './MoodToday.css'
=======
import Quote from "../Quote/Quote"
>>>>>>> 6ed0219 (Add Quote component.Display quote when user's mood is lower than 2)

export default function MoodToday() {
  const today = new Date()
  var dd = String(today.getDate()).padStart(2, "0")
  var mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
  var yyyy = today.getFullYear()

  const date = mm + "/" + dd + "/" + yyyy
  const { todaysMood, displayMood } = useContext(AppContext)
  return (
    <div className="today-mood-container">
      <h3>Today: {date}</h3>
      <p>I am feeling: {displayMood(todaysMood!.mood)}</p>
      {todaysMood!.description && <p>{todaysMood!.description}</p>}
      {todaysMood!.mood <= 3 ? <Quote /> : null}
      {/* <button>Second Thought?</button>  to add when changing mood fnc is available*/}
    </div>
  )
}
