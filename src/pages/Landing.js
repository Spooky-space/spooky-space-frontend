import React, { useState, useEffect, useRef } from "react"
import Image from "../assets/red-tree2.png"
import Logo from "../assets/logo-screenshot-removebg.png"
import Modals from "../components/modal/Modal"
import LoginForm from "../components/modal/LoginForm"
import SignUpForm from "../components/modal/SignUpForm"
import AboutUsModal from "../components/modal/AboutUsModal"
import HalloweenRain from "../assets/HalloweenRain.mp3"
import playImage from "../assets/play.png"
import pauseImage from "../assets/stop.png"


const Landing = ({ signIn, signUp }) => {
  const handleAction = () => {}
  const handleCancel = () => {}
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }


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
          <button onClick={togglePlay} className="audio-control-button">
            <img
              src={isPlaying ? pauseImage : playImage}
              alt={isPlaying ? "Pause Music" : "Play Music"}
              className="play-pause-icon"
            />
          </button>
          <Modals
            title="Create Account"
            body={<SignUpForm signUp={signUp} />}
            onAction={handleAction}
            onCancel={handleCancel}
            trigger={<button className="nav-button">Create Account</button>}
          />
          <Modals
            title="Log In"
            body={<LoginForm signIn={signIn} />}
            onAction={handleAction}
            onCancel={handleCancel}
            trigger={<button className="nav-button">Log In</button>}
          />
          <AboutUsModal
            trigger={<button className="nav-button">About Us</button>}
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
