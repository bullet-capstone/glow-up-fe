import "./HabitCard.css"

export default function HabitCard(props) {
  const uncheck = {
    backgroundImage: "url(../../assets/icons/favicon.ico)",
    color: "blue",
    backgroundRepeat: "no-repeat",
  }

  const toggleCheck = () => {}

  return (
    <div className="habit-card-container">
      <input type="checkbox" value={props.name} />
      <label for="myInput" style={uncheck}>
        {props.name}
      </label>
    </div>
  )
}
