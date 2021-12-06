import "./HabitCard.css"
import { useState, useEffect, useContext } from "react"
import { AppContext } from "../../utils/context"
// import habit7Uncheck from "../../assets/icons/habit7-uncheck.png"

export default function HabitCard(props) {
  const [checked, setChecked] = useState(0)
  const [style, setStyle] = useState({
    backgroundColor: null,
    // backgroundImage: "url(../../assets/icons/habit7-uncheck.png)",
  })
  const { checkedHabitId, setCheckedHabitId } = useContext(AppContext)

  useEffect(() => {
    checked
      ? setStyle({
          ...style,
          backgroundColor: "pink",
          // backgroundImage: `url(../../assets/icons/${props.id}check.png)`,
          // backgroundRepeat: "no-repeat",
        })
      : setStyle({
          ...style,
          backgroundColor: null,
          // backgroundImage: `url(../../assets/icons/${props.id}check.png)`,
          // backgroundImage: "url(../../assets/icons/favicon.ico)",
          // backgroundRepeat: "no-repeat",
        })
  }, [checked])

  const toggleCheck = e => {
    e.preventDefault()
    switch (checked) {
      case 0:
        setChecked(1)
        setCheckedHabitId([...checkedHabitId, parseInt(e.target.id)])
        break

      case 1:
        setChecked(0)
        let filtered = checkedHabitId.filter(ele => ele !== parseInt(e.target.id))
        setCheckedHabitId(filtered)
        break
      default:
        break
    }
  }

  return (
    <div className="habit-card-container">
      <button className="habit-icon" id={props.id} onClick={toggleCheck} style={style}></button>

      <p className="habit-text">{props.name}</p>
    </div>
  )
}
