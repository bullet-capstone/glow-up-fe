import { useContext } from "react"
import { AppContext } from "../../utils/context"
import { HabitEntry } from "../../utils/Models"
import "./WeeklyCard.css"

interface WeeklyCardProps {
  mood: number
  habits: HabitEntry[]
  dayString: string
}

export default function DailyCard(props: WeeklyCardProps) {
  const { displayMood, displayHabit } = useContext(AppContext)

  const habitList = props.habits.map(habit => {
    return <p key={habit.id}>{displayHabit(parseInt(habit.habitId))}</p>
  })

  return (
    <div className="weekly-card">
      <h5>{props.dayString}</h5>
      <p>Mood:{displayMood(props.mood)} </p>
      <div>{habitList}</div>
    </div>
  )
}
