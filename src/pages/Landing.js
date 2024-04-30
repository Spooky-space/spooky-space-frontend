import React from "react"
import Image from "../assets/red-tree2.png"
import Logo from "../assets/logo-screenshot-removebg.png"

const Landing = () => {
  return (
    <div className="page-body landing-background">
      <div className="landing-background-image-container">
        <img
          src={Image}
          alt="picture of glowing red tree in the dark"
          className="landing-background-image"
        />
      </div>
      <div className="landing-content-container">
        <div className="landing-logo-container">
          <img
            src={Logo}
            alt="a redish full moon with the title 'Spooky Space on it'"
            className="landing-logo"
          />
        </div>

        <div className="landing-button-container">
          <button className="create-account-button button">
            Create Account
          </button>
          <div className="about-login">
            <button className="login-button button">Log In</button>
            <button className="about-button button">About</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
