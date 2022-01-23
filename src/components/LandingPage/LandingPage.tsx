import "./LandingPage.css"
import logo from '../../assets/logo-transparent.png'
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="landing-view">
      <section className="landing-header">
        <img id="logo-img" src={logo} alt="logo" />
        {/* <h4>Glow Up</h4> */}
      </section>
      <section className="landing-main">
        <div className="landing-intro">
          <h1>Landing template for starups</h1>
          <h3>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever. </h3>
        </div>
     
        <div className="landing-btn-container">
          <Link to="/glow-up-fe/login">
        <button className="login-button">LOGIN</button>
        </Link>
          <Link to="/glow-up-fe/signup">
            <button className="signup-button">SIGN UP</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
