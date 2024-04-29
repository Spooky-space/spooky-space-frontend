import React, { useState } from "react"
import Image from "../assets/red-tree2.png"
import Logo from "../assets/spooky-space-logo.png"
import Modals from "../components/modal/Modal" // Ensure this import path is correct based on your project structure

const Landing = () => {
  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Function to toggle the modal's visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="page-body landing-background">
      <div className="landing-background-image-container">
        <img
          src={Image}
          alt="picture of a glowing red tree in the dark"
          className="landing-background-image"
        />
      </div>
      <div className="landing-content-container">
        <div className="landing-logo-container">
          <img
            src={Logo}
            alt="a reddish full moon with the title 'Spooky Space' on it"
            className="landing-logo"
          />
        </div>
        <div className="landing-button-container">
          <button
            className="create-account-button button"
            onClick={toggleModal} // This could be set for a different function if needed
          >
            Create Account
          </button>
          <button
            className="login-button button"
            onClick={toggleModal} // This could be set for a different function if needed
          >
            Log In
          </button>
          <button
            className="about-button button"
            onClick={toggleModal} // This button specifically toggles the modal
          >
            About Us
          </button>
        </div>
      </div>
      {/* Conditionally render the Modal based on the isModalOpen state */}
      <Modals isOpen={isModalOpen} toggle={toggleModal} />
    </div>
  )
}

export default Landing
