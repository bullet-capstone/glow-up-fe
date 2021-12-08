import { useContext } from "react"
import { AppContext } from "../../utils/context"

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
      {/* <button>Second Thought?</button>  to add when changing mood fnc is available*/}
    </div>
  )
}
