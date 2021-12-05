import "./HabitCard.css"

export default function HabitCard() {
  const uncheck = { backgroundImage: "url(../../assets/icons/favicon.ico)", color: "blue" }

  return (
    <div className="habit-card-container">
      <input type="checkbox" name="myInput" />
      <label for="myInput" style={uncheck}>
        Habit name1
      </label>
    </div>
  )
}
