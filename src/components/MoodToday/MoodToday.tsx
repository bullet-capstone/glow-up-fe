import { useContext } from "react"
import { AppContext } from "../../utils/context"
import "./MoodToday.css"
import { Mood } from "../../utils/Models"


interface MoodTodayProps {
  mt:Mood
}

export default function MoodToday(props:MoodTodayProps) {
  const {displayMood, getDayString } = useContext(AppContext)
  const date = getDayString(0)
  return (
    <div className="today-mood-container">
      <h3 style={{ fontSize: "30px" }}>Today: {date}</h3>
      <p style={{ fontSize: "20px", paddingTop: "20px" }}>I am feeling: {displayMood(props.mt!.mood)}</p>
      {props.mt!.description && <p>{props.mt!.description}</p>}
    </div>
  )
}
