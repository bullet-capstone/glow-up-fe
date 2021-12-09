import { useContext, useEffect } from "react"
import { AppContext } from "../../utils/context"
import { HabitEntry } from "../../utils/Models"
import "./WeeklyCard.css"

interface WeeklyCardProps {
  mood: number
  habits: HabitEntry[]
}

export default function DailyCard(props: WeeklyCardProps) {
  const { displayMood, displayHabit, getDayString } = useContext(AppContext)

  const habitList = props.habits.map(habit => {
    return <p>{displayHabit(parseInt(habit.habitId))}</p>
  })

  useEffect(() => {
    console.log("props habits", props.habits)
  }, [])

  return (
    <div className="weekly-card">
      <p></p>
      <p>Mood:{displayMood(props.mood)} </p>
      <div>{habitList}</div>
    </div>
  )
}
