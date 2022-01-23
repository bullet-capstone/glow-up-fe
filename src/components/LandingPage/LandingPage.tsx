import "./LandingPage.css"
import logo from '../../assets/logo-transparent.png'
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="landing-view">
      <div className="landing-header">
        <img id="logo-img" src={logo} alt="logo" />
        <h4>Glow Up</h4>
        <ul className="landing-ul">
          <li>Home</li>
          <li>Product</li>
          <li>Team</li>
        </ul>
        
        
      </div>
      <div className="landing-main">
        <div className="landing-btn-container">
          <Link to="/glow-up-fe/signup">
            <button className="signup-button">Sign Up</button>
          </Link>
          <Link to="/glow-up-fe/login">
        <button className="login-button">Login</button>
        </Link>
        </div>
      </div>
    </div>
  )
}
