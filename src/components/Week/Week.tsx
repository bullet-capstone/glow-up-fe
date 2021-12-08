import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client"
import { QUERY_WEEKLY_ENTRIES } from "../../utils/graph_queries"
import { HabitEntry } from "../../utils/Models"

export default function Week() {
  const { loading, error, data } = useQuery(QUERY_WEEKLY_ENTRIES)
  const [weeklyStats, setWeeklyStats] = useState({})
  // const [weeklyHabits, setWeeklyHabits] = useState([])

  useEffect(() => {
    if (!loading && data) {
      const orderedHabits = []
      for (let i = 1; i <= 7; i++) {
        let day = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24 * i)
        let dayString = day.toISOString().slice(0, 10)
        console.log(dayString)
        let dayHabits = data.fetchUser.weeklyHabits.filter((habit: HabitEntry) => {
          return habit.date.slice(0, 10) === dayString
        })
        console.log(dayHabits)

        // orderedHabits.push(dayHabits)
      }
    }
    // data.fetchUser.weeklyHabits.reduce((acc, ele)=>{

    //   return [...acc,[]]
    // },[])

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data])

  // const makeCards = () => {
  //   const weeklyCards = todaysHabits!.map((habit: Habit) => <p key={habit.id}>✅ {habit.name}</p>)

  //   return completedHabits
  // }

  return <div></div>
}
