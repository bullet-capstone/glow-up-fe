import "./JournalEntryForm.css"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { SUBMIT_JOURNAL_ENTRY } from "../../utils/graph_mutations"
import { QUERY_JOURNAL_ENTRIES } from "../../utils/graph_queries"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useCookies } from "react-cookie";


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  height: 350,
  bgcolor: 'background.paper',
  border: '2px solid grey',
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};


const JournalEntryForm = () => {
  const [cookie,]= useCookies(['userToken'])

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      createJournalEntry({ variables: { content: content,userToken: cookie.userToken } })
      setValidateForm(true)
      setContent("")
      handleClose()
    }
  }

  return (
    <section className="journal-entry-form-container">
      <Button
        style={{
          color: "white",
          backgroundColor: "rgba(220, 79, 61, 0.8)",
          marginTop: "-20%"
        }}
        onClick={handleOpen}
      >
        Write in your journal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="journal-entry"
        aria-describedby="journal-entry-modal"
      >
        <Box sx={style}>
          <form className="journal-entry-form" id="journal-entry-modal" onSubmit={handleSubmit}>
            <h2 id="journal-entry">What's on your mind?</h2>
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
          </form>
        </Box>
      </Modal>

    </section>
  )
}

export default JournalEntryForm
