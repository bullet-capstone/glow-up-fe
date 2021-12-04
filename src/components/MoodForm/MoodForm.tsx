import './MoodForm.css';
import { useState } from 'react';

const MoodForm = () => {
  const [ mood, setMood ] = useState('')
  const [ description, setDescription ] = useState('')


  return (
    <section className="mood-form-container">
      <form className="mood-form">
        <h2>
          How are you feeling today?
        </h2>
        <div>
          <input
            type="radio"
            aria-label="strongly negative"
            name="mood"
            id="strongly-negative"
            value="1"
            onClick={ e => setMood(e.currentTarget.value) }
          />
          <label
            htmlFor="strongly-negative"
            className="mood-label"
          >
            😭
          </label>
          <input
            type="radio"
            aria-label="negative"
            name="mood"
            id="negative"
            value="2"
            onClick={ e => setMood(e.currentTarget.value) }
          />
          <label
            htmlFor="negative"
            className="mood-label"
          >
            🙁
          </label>
          <input
            type="radio"
            aria-label="neutral"
            name="mood"
            id="neutral"
            value="3"
            onClick={ e => setMood(e.currentTarget.value) }
          />
          <label
            htmlFor="neutral"
            className="mood-label"
          >
            😐
          </label>
          <input
            type="radio"
            aria-label="positive"
            name="mood"
            id="positive"
            value="4"
            onClick={ e => setMood(e.currentTarget.value) }
          />
          <label
            htmlFor="positive"
            className="mood-label"
          >
            🙂
          </label>
          <input
            type="radio"
            aria-label="strongly positive"
            name="mood"
            id="strongly-positive"
            value="5"
            onClick={ e => setMood(e.currentTarget.value) }
          />
          <label
            htmlFor="strongly-positive"
            className="mood-label"
          >
            😁
          </label>
        </div>
        <input
          type="text"
          placeholder="Today, I am feeling..."
          className="mood-description"
          value={ description }
          onChange={ e => setDescription(e.currentTarget.value) }
        />
      </form>
    </section>
  )
}

export default MoodForm;
