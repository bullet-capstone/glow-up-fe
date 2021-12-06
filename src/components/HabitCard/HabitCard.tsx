import "./HabitCard.css"
import { useState, useContext } from "react"
import { AppContext } from "../../utils/context"

interface HabitCardProps {
  name: string
  id: string
}

export default function HabitCard(props: HabitCardProps) {
  const { checkedHabitIds, setCheckedHabitIds } = useContext(AppContext)
  const [checked, setChecked] = useState(checkedHabitIds.includes(parseInt(props.id)))
  const [style, setStyle] = useState({
    backgroundColor: "#e4dfdd",
    color: "black",
  })

  const toggleCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    switch (checked) {
      case false:
        setChecked(true)
        setCheckedHabitIds([...checkedHabitIds, parseInt(e.currentTarget.id)])
        setStyle({ backgroundColor: "#4a5582", color: "#fff" })
        break

      case true:
        setChecked(false)
        let filtered = checkedHabitIds.filter(ele => ele !== parseInt(e.currentTarget.id))
        setCheckedHabitIds(filtered)
        setStyle({ backgroundColor: "#e4dfdd", color: "black" })
        break
      default:
        break
    }
  }

  return (
    <button className="habit-card-button" onClick={toggleCheck} id={props.id} style={style}>
      {props.name}
    </button>
  )
}
