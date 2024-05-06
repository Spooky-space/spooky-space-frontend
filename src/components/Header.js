import React from "react"
import headerlogo from "../assets/header-logo.png"
import NavButton from "./NavButton"
import { Link, NavLink, useNavigate } from "react-router-dom"
import AboutUsModal from "./modal/AboutUsModal"
import { Button } from "reactstrap"

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
						<AboutUsModal />
						<Button
							to="/mymovielist"
							buttonContent="My Movies"
							className="header-nav-button nav-button"
						>
							MyMovieList
						</Button>
						<Button
							onClick={handleLogOut}
							className="header-logout-nav-button nav-button"
						>
							LogOut
						</Button>
					</div>
				</div>
			)}
		</>
	)
}

export default Header
