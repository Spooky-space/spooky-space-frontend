import React from "react"
import Image from "../assets/landing-tree-bkgr.png"
import Logo from "../assets/landing-logo.png"

const Landing = () => {
  return (
    <div className="page-body landing-background">
      <div className="landing-background-image-container">
        <img
          src={Image}
          alt="picture of glowing red tree in the dark"
          className="landing-background-image"
        />
        <div className="landing-content-container">
          <div className="landing-logo-container">
            <img
              src={Logo}
              alt="a redish full moon with the title 'Spooky Space on it'"
              className="landing-logo"
            />
          </div>
          <div className="landing-button-container">
            <button onClick={}></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
