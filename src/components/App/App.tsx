import "./App.css"
import MoodForm from "../MoodForm/MoodForm"
import HabitForm from "../HabitForm/HabitForm"
import Dashboard from "../Dashboard/Dashboard"
import { Routes, Route, NavLink } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>GlowUp</h1>
        <nav className="nav">
          <NavLink to="glow-up-fe/dashboard">Dashboard</NavLink>
          <NavLink to="glow-up-fe/track">Track</NavLink>
          <NavLink to="glow-up-fe/journal">Journal</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="glow-up-fe">
          <Route index element={<Dashboard />} />
          <Route
            path="track"
            element={
              <section className="trackers-container">
                <MoodForm />
                <HabitForm />
              </section>
            }
          />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
