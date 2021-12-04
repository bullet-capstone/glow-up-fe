import './MoodForm.css';
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { SUBMIT_MOOD } from '../../utils/graph_mutations';

const MoodForm = () => {
  const [ mood, setMood ] = useState('')
  const [ description, setDescription ] = useState('')

  const [ createMood ] = useMutation(SUBMIT_MOOD)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createMood({ variables: { mood: parseInt(mood), description: description }})

    setMood('');
    setDescription('');
  }

  return (
    <section className="mood-form-container">
      <form className="mood-form" onSubmit={ handleSubmit }>
        <h2>
          How are you feeling today?
        </h2>
        <div>
          <input
            type="radio"
            aria-label="strongly negative"
            name="mood"
            id="strongly-negative"
            value="0"
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
            value="1"
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
            value="2"
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
            value="4"
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
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default MoodForm;
