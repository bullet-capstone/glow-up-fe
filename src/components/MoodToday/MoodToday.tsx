import { useContext } from "react"
import { AppContext } from "../../utils/context"
import "./MoodToday.css"

export default function MoodToday() {
  const { todaysMood, displayMood, getDayString } = useContext(AppContext)
  const date = getDayString(0)
  return (
    <div className="today-mood-container">
      <h3>Today: {date}</h3>
      <p>I am feeling: {displayMood(todaysMood!.mood)}</p>
      {todaysMood!.description && <p>{todaysMood!.description}</p>}
      {/* <button>Second Thought?</button>  to add when changing mood fnc is available*/}
    </div>
  )
}
