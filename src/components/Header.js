import React from "react"
// import styled from "styled-components"
import headerlogo from "../assets/header-logo.png"
import NavButton from "./NavButton"
import { NavLink } from "react-router-dom"
import { Modal } from "reactstrap"

const Header = () => {
	return (
		<>
			<div className="navbar-container">
				<NavLink to={"/home"}>
					<img className="header-logo" src={headerlogo} alt="Logo" />
				</NavLink>
				<div className="button-container">
					<Modal />
					<NavButton
						to="MyMovieList"
						buttonContent={"My Movies"}
						className="nav-button"
					>
						MyMovieList
					</NavButton>
					<span>___</span>
					<NavButton
						to="LogOut"
						buttonContent={"LogOut"}
						className="nav-button"
						href="#contact"
					>
						LogOut
					</NavButton>
				</div>
			</div>
		</>
	)
}

export default Header
