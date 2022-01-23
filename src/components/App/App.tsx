import "./App.css"
import MoodForm from "../MoodForm/MoodForm"
import HabitForm from "../HabitForm/HabitForm"
import Dashboard from "../Dashboard/Dashboard"
import Journal from "../Journal/Journal"
import Header from "../Header/Header"
import LandingPage from "../LandingPage/LandingPage"
import Signup from "../Signup/Signup"
import Login from "../Login/Login"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="glow-up-fe" element={<LandingPage />}> </Route>
          <Route
            path="glow-up-fe/track"
            element={
              <section className="trackers-container">
                <Header />
                <MoodForm />
                <HabitForm />
              </section>
            }
          />
          <Route path="glow-up-fe/dashboard" element={
          <>
          <Header />
          <Dashboard />
          </>} />
          <Route path="glow-up-fe/journal" element={
          <>
          <Header />
          <Journal />
          </>
          } />
          <Route path="glow-up-fe/signup" element={<Signup />} />
          <Route path="glow-up-fe/login" element={<Login />} />
          <Route path="/*" element={
            <>
          <Header />
          <Dashboard />
            </>} />
      </Routes>
    </div>
  )
}

export default App
