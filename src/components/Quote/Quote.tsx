import { useState, useEffect } from "react"

export default function Quote() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        setQuote(data.content)
        setAuthor(data.author)
      })
  }, [])

  return (
    <div className="quote-container">
      <p className="quote-prompt">Feeling down? Here's a quote for you:</p>
      <p className="quote-body">
        "{quote}" -- {author}
      </p>
    </div>
  )
}
