import "./Journal.css"
import { QUERY_JOURNAL_ENTRIES } from "../../utils/graph_queries"
import { useQuery } from "@apollo/client"
import { JournalEntry } from "../../utils/Models"
import JournalEntryForm from "../JournalEntryForm/JournalEntryForm"
import { useEffect, useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCookies } from "react-cookie";

const Journal = () => {
  const [cookie,]= useCookies(['userToken'])
  const { loading, data, error } = useQuery(QUERY_JOURNAL_ENTRIES,{variables:{
    token: cookie.userToken
    
  }})
  const [ journalEntries, setJournalEntries ] = useState<JournalEntry[]>([])

  useEffect(() => {
    if (!loading && data) {
      setJournalEntries(data.fetchUser.journalEntries)
    }
  }, [loading, data])

  let entryCards;
  if (journalEntries.length) {
    entryCards = journalEntries.map((entry :JournalEntry) => {
      const date = new Date(entry.date).toLocaleString("en-US")
      return (
        <Accordion key={entry.id}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${entry.id}-content`}
        id={entry.id}
        >
        <Typography>Journal Entry {date}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        {entry.content}
        </Typography>
        </AccordionDetails>
        </Accordion>
      )
    })

  }

  return (
    <section>
      <div className="journal-title-container">
        <h1 className="journal-title">My Journal</h1>
        <JournalEntryForm/>
      </div>
      { journalEntries.length? entryCards:"No journal entries yet" }
      { loading && <h2>Loading...</h2> }
      { error && <h2>Oops, something went wrong!</h2> }
    </section>
  )
}

export default Journal
