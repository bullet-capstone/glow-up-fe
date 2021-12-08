import { useContext } from "react"
import { AppContext } from "../../utils/context"
import { HabitEntry } from "../../utils/Models"
import "./WeeklyCard.css"

interface WeeklyCardProps {
  mood: number
  habits: HabitEntry[]
}

export default function DailyCard(props: WeeklyCardProps) {
  const { displayMood } = useContext(AppContext)
  // const habitLists = props.habits.

  return (
    <div className="weekly-card">
      <p>Mood:{displayMood(props.mood)} </p>
    </div>
  )
}
