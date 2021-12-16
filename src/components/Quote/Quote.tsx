import { useState, useEffect } from "react"

export default function Quote() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    fetch("https://api.quotable.io/random?maxLength=200")
      .then(response => response.json())
      .then(data => {
        setQuote(data.content)
        setAuthor(data.author)
      })
  }, [])

  return (
    <div className="quote-container">
      <p className="page-quote">Feeling down? Here's a quote for you:</p>
      <p className="page-quote">
        "{quote}"
      </p>
      <p className="page-quote author">
        - {author}
      </p>
    </div>
  )
}
