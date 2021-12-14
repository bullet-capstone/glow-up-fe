// import "./JournalEntryForm.css"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { SUBMIT_JOURNAL_ENTRY } from "../../utils/graph_mutations"
import { QUERY_JOURNAL_ENTRIES } from "../../utils/graph_queries"

const JournalEntryForm = () => {
  const [createJournalEntry] = useMutation(SUBMIT_JOURNAL_ENTRY, {
    refetchQueries: [
      QUERY_JOURNAL_ENTRIES,
      "fetchJournalEntries"
    ]
  })
  const [content, setContent] = useState("")
  const [validateForm, setValidateForm] = useState(true)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!content) {
      setValidateForm(false)
    } else {
      createJournalEntry({ variables: { content: content } })
      setValidateForm(true)
      setContent("")
    }
  }

  return (
    <section className="journal-entry-form-container">
      <form className="journal-entry-form" onSubmit={handleSubmit}>
        <h2>What's on your mind?</h2>
        <div className="journal-entry-container">
          <textarea
            name="journalEntry"
            id="journalEntryInput"
            value={content}
            onChange={e => setContent(e.currentTarget.value)}
          ></textarea>
          {
            !validateForm && <p>Write something</p>
          }
          <button className="journal-entry-submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default JournalEntryForm
