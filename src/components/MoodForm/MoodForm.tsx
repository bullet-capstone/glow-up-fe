import "./MoodForm.css"
import { useState, useContext } from "react"
import { useMutation } from "@apollo/client"
import { SUBMIT_MOOD } from "../../utils/graph_mutations"
import { QUERY_DAILY_ENTRIES } from "../../utils/graph_queries.js"
import { AppContext } from "../../utils/context"
import MoodToday from "../MoodToday/MoodToday"
import Quote from "../Quote/Quote"

const MoodForm = () => {
  const [mood, setMood] = useState("")
  const [description, setDescription] = useState("")
  const [validateForm, setValidateForm] = useState(true)
  const [createMood] = useMutation(SUBMIT_MOOD, {
    refetchQueries: [QUERY_DAILY_ENTRIES, "FetchDailyEntries"],
  })
  const { todaysMood } = useContext(AppContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!mood) {
      setValidateForm(false)
    } else {
      createMood({ variables: { mood: parseInt(mood), description: description } })
      setValidateForm(true)
      setMood("")
      setDescription("")
    }
  }

  return (
    <section className="mood-form-container">
      {todaysMood ? (
        <>
          <MoodToday />
          {todaysMood!.mood <= 2 ? <Quote /> : null}
        </>
      ) : (
        <form className="mood-form" onSubmit={handleSubmit}>
          <h2>How are you feeling today?</h2>
          <div className="moods-container">
            <input
              type="radio"
              aria-label="strongly positive"
              name="mood"
              id="strongly-positive"
              value="4"
              onChange={e => setMood(e.currentTarget.value)}
              checked={mood === "4"}
            />
            <label htmlFor="strongly-positive" className="mood-label">
              😁
            </label>
            <input
              type="radio"
              aria-label="positive"
              name="mood"
              id="positive"
              value="3"
              onChange={e => setMood(e.currentTarget.value)}
              checked={mood === "3"}
            />
            <label htmlFor="positive" className="mood-label">
              🙂
            </label>
            <input
              type="radio"
              aria-label="neutral"
              name="mood"
              id="neutral"
              value="2"
              onChange={e => setMood(e.currentTarget.value)}
              checked={mood === "2"}
            />
            <label htmlFor="neutral" className="mood-label">
              😐
            </label>

            <input
              type="radio"
              aria-label="negative"
              name="mood"
              id="negative"
              value="1"
              onChange={e => setMood(e.currentTarget.value)}
              checked={mood === "1"}
            />
            <label htmlFor="negative" className="mood-label">
              🙁
            </label>
            <input
              type="radio"
              aria-label="strongly negative"
              name="mood"
              id="strongly-negative"
              value="0"
              onChange={e => setMood(e.currentTarget.value)}
              checked={mood === "0"}
            />
            <label htmlFor="strongly-negative" className="mood-label">
              😭
            </label>
          </div>
          {!validateForm && <p className="error-message">**Please select your mood today!**</p>}
          <input
            type="text"
            placeholder="Describe your mood..."
            className="mood-description"
            value={description}
            onChange={e => setDescription(e.currentTarget.value)}
          />
          <button className="mood-submit-button" type="submit">
            ✔ submit your mood
          </button>
        </form>
      )}
    </section>
  )
}

export default MoodForm
