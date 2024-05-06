import React from "react"
import headerlogo from "../assets/header-logo.png"
import NavButton from "./NavButton"
import { Link, NavLink, useHref, useNavigate } from "react-router-dom"
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
							buttonContent="My Movies"
							className="header-nav-button nav-button"
						>
							<NavLink to="/mymovielist" className="my-movie-link">
								MyMovieList
							</NavLink>
						</Button>
						<Button
							onClick={handleLogOut}
							className="header-logout-nav-button nav-button"
						>
							<NavLink className="my-movie-link">LogOut</NavLink>
						</Button>
					</div>
				</div>
			)}
		</>
	)
}

export default Header
