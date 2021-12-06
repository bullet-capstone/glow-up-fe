import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client"
import "./App.css"
import { QUERY_USER } from "../../utils/graph_queries"
import { User } from "../../utils/Models"
import MoodForm from "../MoodForm/MoodForm"
import HabitForm from "../HabitForm/HabitForm"
import Dashboard from "../Dashboard/Dashboard"
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  const { loading, error, data } = useQuery(QUERY_USER)

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (!loading && data) {
      setUser(data.fetchUser)
    }
  }, [data, loading])

  if (loading) {
    return <h2>Loading</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div className="App">
      <header className="header">
        <h1>GlowUp</h1>
        {//user && <h2>Welcome {user.username}</h2>}
      }
        <nav className="nav">
          <h2>Dashboard</h2>
          <h2>Journal</h2>
        </nav>
      </header>
      <MoodForm />
      <HabitForm />
      <Dashboard />
    </div>
  )
}

export default App
