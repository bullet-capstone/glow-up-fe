import "./HabitCard.css"

export default function HabitCard() {
  const uncheck = { backgroundImage: "url(../../assets/icons/logo192.png)", color: "blue" }

  return (
    <div className="habit-card-container">
      <input type="checkbox" name="myInput" />
      <label for="myInput" style={uncheck}>
        Some text
      </label>
    </div>
  )
}
