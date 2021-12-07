import "./App.css"
import MoodForm from "../MoodForm/MoodForm"
import HabitForm from "../HabitForm/HabitForm"
import Dashboard from "../Dashboard/Dashboard"
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>GlowUp</h1>
        <nav className="nav">
          <NavLink to="glow-up-fe/">
            Mood Tracker
          </NavLink>
          <NavLink to="glow-up-fe/habit-tracker">
            Habit Tracker
          </NavLink>
          <NavLink to="glow-up-fe/journal">
            Journal
          </NavLink>
          <NavLink to="glow-up-fe/dashboard">
            Dashboard
          </NavLink>

        </nav>
      </header>
      <Routes>
        <Route path="glow-up-fe">
          <Route index element={<MoodForm />}/>
          <Route path="habit-tracker" element={<HabitForm />}/>
          <Route path="dashboard" element={<Dashboard />}/>
        </Route>
      </Routes>

    </div>
  )
}

export default App
