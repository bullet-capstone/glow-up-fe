import "./App.css"
import MoodForm from "../MoodForm/MoodForm"
import HabitForm from "../HabitForm/HabitForm"
import Dashboard from "../Dashboard/Dashboard"
import Journal from "../Journal/Journal"
import Header from "../Header/Header"
import LandingPage from "../LandingPage/LandingPage"
import Signup from "../Signup/Signup"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="glow-up-fe">
          <Route index element={<LandingPage />} />
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
          <Route path="journal" element={<Journal />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
