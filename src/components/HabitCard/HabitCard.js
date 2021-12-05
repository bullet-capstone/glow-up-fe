import "./HabitCard.css"
import { useState, useEffect } from "react"

export default function HabitCard(props) {
  const [cardState, setCardState] = useState({
    checked: 0,
    style: { color: "red" },
  })
  // const [style, setStyle] = useState({ color: null })

  // useEffect(() => {
  //   checked
  //     ? setStyle({
  //         ...style,
  //         // backgroundImage: "url(../../assets/icons/checked.ico)",
  //         color: "red",
  //         // backgroundRepeat: "no-repeat",
  //       })
  //     : setStyle({
  //         ...style,
  //         // backgroundImage: "url(../../assets/icons/favicon.ico)",
  //         color: "blue",
  //         // backgroundRepeat: "no-repeat",
  //       })
  // }, [checked])

  const toggleCheck = () => {
    console.log("toggle check fires")
    cardState.checked
      ? setCardState({
          ...cardState,
          checked: 0,
          style: { color: "red" },
        })
      : setCardState({
          ...cardState,
          checked: 1,
          style: { color: "blue" },
        })
  }

  return (
    <div className="habit-card-container">
      <label style={cardState.style} onClick={toggleCheck}>
        <input type="checkbox" value={props.name} id={props.id} />
        {props.name}
      </label>
    </div>
  )
}
