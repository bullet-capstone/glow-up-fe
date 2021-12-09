import "./Journal.css"
import { QUERY_JOURNAL_ENTRIES } from "../../utils/graph_queries"
import { useQuery } from "@apollo/client"
import { JournalEntry } from "../../utils/Models"
import { useEffect, useState } from "react"

const Journal = () => {
  const { loading, data, error } = useQuery(QUERY_JOURNAL_ENTRIES)
  const [ journalEntries, setJournalEntries ] = useState<JournalEntry[]>([])

  useEffect(() => {
    if (!loading && data) {
      setJournalEntries(data.fetchUser.journalEntries)
    }
  }, [loading, data])

  const entryCards = journalEntries.map((entry :JournalEntry) => {
    const date = new Date(entry.date).toLocaleString("en-US")
    return (
      <article key={entry.id}>
        <p>{date}</p>
        <p>{entry.content}</p>
      </article>
    )
  })

  return (
    <section>
      { loading && <h2>Loading...</h2> }
      { error && <h2>Oops, something went wrong!</h2> }
      <h1>Journal</h1>
      { entryCards }
    </section>
  )
}

export default Journal
