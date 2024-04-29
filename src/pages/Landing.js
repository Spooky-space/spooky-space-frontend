import React from "react"
import Image from "../assets/red-tree2.png"
import Logo from "../assets/spooky-space-logo.png"
import Modal from "../components/modal/Modal"

const handleClick = () => {
	return <Modal />
}
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
					<button
						className="create-account-button button"
						onClick={handleClick}
					>
						Create Account
					</button>
					<button className="login-button button" onClick={handleClick}>
						Log In
					</button>

					<button className="about-button button" onClick={handleClick}>
						<Modal />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Landing
