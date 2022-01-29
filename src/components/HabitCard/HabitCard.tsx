import "./HabitCard.css"
import { useState,useEffect } from "react"

interface HabitCardProps {
  name: string
  id: string
  checkedToday: boolean
  updateHabits:(arr:number[]) => void
  checkedIds:number[]
}

export default function HabitCard(props: HabitCardProps) {
  // const { checkedHabitIds, setCheckedHabitIds } = useContext(AppContext)
  const {updateHabits, checkedIds}= props
  const [checked, setChecked] = useState(props.checkedToday)
  const [style] = useState({
    false: {
      backgroundColor: "#E7E7E7",
      color: "black",
    },
    true: {
      backgroundColor: "#86AE5B",
      color: "black",
    },
  })

  useEffect(() => {
    setChecked(props.checkedToday)
  }, [props.checkedToday])

  const toggleCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    switch (checked) {
      case false:
        setChecked(true)
        updateHabits([...checkedIds, parseInt(e.currentTarget.id)])
        break

      case true:
        setChecked(false)
        let filtered = checkedIds.filter(ele => ele !== parseInt(e.currentTarget.id))
        updateHabits(filtered)
        break
      default:
        break
    }
  }

  return (
    <button
      className="habit-card-button"
      onClick={toggleCheck}
      id={props.id}
      style={checked ? style.true : style.false}
    >
      {props.name}
    </button>
  )
}
