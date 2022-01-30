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
        {/* <div className="landing-intro"> */}
          <h1 className="landing-title" style={{color:'#36454F'}}>GlowUp</h1>
          <h3 className="landing-intro" style={{color:'#36454F'}} >Login or sign up to start your mindfulness journey today!</h3>
        {/* </div> */}
     
        <div className="landing-btn-container">
          <Link to="/glow-up-fe/signup">
            <button className="signup-button">SIGN UP</button>
          </Link>
          <Link to="/glow-up-fe/login">
          <button className="login-button">LOGIN</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
