import React from "react"
import headerlogo from "../assets/header-logo.png"
import NavButton from "./NavButton"
import { NavLink, useNavigate } from "react-router-dom"
import AboutUsModal from "./modal/AboutUsModal"

const Header = ({ logOut, user }) => {
	const navigate = useNavigate()

	const handleLogOut = () => {
		logOut()
		navigate("/")
	}
	return (
		<>
			{user && user !== "invalid" && (
				<div className="navbar-container">
					<NavLink to="/">
						<img className="header-logo" src={headerlogo} alt="Logo" />
					</NavLink>
					<div className="button-container">
						<AboutUsModal className="nav-button modal-nav-button" />
						<NavButton
							url="/mymovielist"
							buttonContent="My Movies"
							className="nav-button"
						>
							MyMovieList
						</NavButton>
						<span>___</span>
						<button onClick={handleLogOut} className="nav-button">
							LogOut
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Header
