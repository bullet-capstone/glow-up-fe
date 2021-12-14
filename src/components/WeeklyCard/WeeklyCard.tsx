import { useContext } from "react"
import { AppContext } from "../../utils/context"
import { HabitEntry } from "../../utils/Models"
import "./WeeklyCard.css"

interface WeeklyCardProps {
  mood: number
  habits: HabitEntry[]
  dayString: string
}

export default function WeeklyCard(props: WeeklyCardProps) {
  const { displayMood, habitMap } = useContext(AppContext)
  let habitList;

  if (props.habits.length) {
    habitList = props.habits.sort().map((habit, i) => {
      return (
        <p key={i} className="weekly-card-habit">
           ✩ {habitMap![parseInt(habit.habitId) as keyof typeof habitMap]}
        </p>
      )
    })
  }


  return (
    <div className="weekly-card">
      <h4>{props.dayString}</h4>
      <p className="weekly-card-mood">Mood: {displayMood(props.mood)} </p>
      <div>{props.habits.length ? habitList : 'No habit entries for this day.'}</div>
    </div>
  )
}
