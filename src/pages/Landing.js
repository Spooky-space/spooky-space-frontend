import React from "react"
import Image from "../assets/red-tree2.png"
import Logo from "../assets/logo-screenshot-removebg.png"
import Modals from "../components/modal/Modal"
import LoginForm from "../components/modal/LoginForm"
import SignUpForm from "../components/modal/SignUpForm"
import AboutUsModal from "../components/modal/AboutUsModal"

const Landing = ({ signIn, signUp }) => {
  const handleAction = () => {}

  const handleCancel = () => {}

  return (
    <div className="page-body landing-background">
      <div className="landing-background-image-container">
        <img
          src={Image}
          alt="Glowing red tree"
          className="landing-background-image"
        />
      </div>
      <div className="landing-content-container">
        <div className="landing-logo-container">
          <img src={Logo} alt="Spooky Space" className="landing-logo" />
        </div>
        <div className="landing-button-container">
          <Modals
            title="Create Account"
            body={<SignUpForm signUp={signUp} />}
            onAction={handleAction}
            onCancel={handleCancel}
            trigger={
              <button className="create-account-button button">
                Create Account
              </button>
            }
          />
          <Modals
            title="Log In"
            body={<LoginForm signIn={signIn} />}
            onAction={handleAction}
            onCancel={handleCancel}
            trigger={<button className="login-button button">Log In</button>}
          />
          <AboutUsModal
            trigger={<button className="about-button button">About Us</button>}
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
