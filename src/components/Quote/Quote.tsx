import { useState, useEffect } from "react"

export default function Quote() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    fetch("https://api.quotable.io/random?")
      .then(response => response.json())
      .then(data => {
        setQuote(data.content)
        setAuthor(data.author)
      })
  }, [])

  return (
    <div>
      <p>Feeling down? Here's a quote for you:</p>
      <p>
        "{quote}" -- {author}
      </p>
    </div>
  )
}
