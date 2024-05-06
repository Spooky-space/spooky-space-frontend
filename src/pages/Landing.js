import React, { useEffect, useRef } from "react"
import Image from "../assets/red-tree2.png"
import Logo from "../assets/logo-screenshot-removebg.png"
import Modals from "../components/modal/Modal"
import LoginForm from "../components/modal/LoginForm"
import SignUpForm from "../components/modal/SignUpForm"
import AboutUsModal from "../components/modal/AboutUsModal"
import HalloweenRain from "../assets/HalloweenRain.mp3" // Make sure the path is correct

const Landing = ({ signIn, signUp }) => {
  const handleAction = () => {}
  const handleCancel = () => {}
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current
      audio.loop = true
      audioRef.current.volume = 0.2 // Set volume to 30%
      audioRef.current.play()
    }
  }, [])

  return (
    <div className="page-body landing-background">
      <audio ref={audioRef} src={HalloweenRain} loop />
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
