import "./LandingPage.css"

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-nav">
        <h4>Glow Up</h4>
        <ul className="landing-ul">
          <li>Home</li>
          <li>Product</li>
          <li>Team</li>
        </ul>
        <button className="login-button">Login</button>
      </div>
      <div className="landing-main">
        <div className="main-left">
          <button className="signup-button">Sign Up</button>
        </div>
        <div className="main-right"></div>
      </div>
    </div>
  )
}
