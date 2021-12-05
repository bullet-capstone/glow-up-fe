import "./HabitCard.css"
import { useState, useEffect } from "react"

export default function HabitCard(props) {
  const [checked, setChecked] = useState(
    0
    // style: { backgroundColor: "none" },
  )

  const [style, setStyle] = useState({ backgroundColor: null })

  useEffect(() => {
    checked
      ? setStyle({
          ...style,
          // backgroundImage: "url(../../assets/icons/checked.ico)",
          backgroundColor: "pink",
          // backgroundRepeat: "no-repeat",
        })
      : setStyle({
          ...style,
          // backgroundImage: "url(../../assets/icons/favicon.ico)",
          backgroundColor: null,
          // backgroundRepeat: "no-repeat",
        })
  }, [checked])

  const toggleCheck = e => {
    e.preventDefault()
    console.log("toggle check fires")
    checked
      ? setChecked(0)
      : //     : setCardState({
        //         ...cardState,
        //         checked: 1,
        //         style: { backgroundColor: "none" },
        //       })
        setChecked(1)
  }

  return (
    <div className="habit-card-container">
      {/* <label style={cardState.style} onClick={toggleCheck}>
        <input type="checkbox" value={props.name} id={props.id} />
        {props.name}
      </label> */}

      <button className="habit-icon" id={props.id} onClick={toggleCheck} style={style}></button>
      <p className="habit-text">{props.name}</p>
    </div>
  )
}
