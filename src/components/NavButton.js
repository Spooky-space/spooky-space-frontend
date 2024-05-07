import React from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
const NavButton = ({ url, buttonContent }) => {
	return (
		<Link to={url}>
			<button className="nav-button">
				<NavLink to={url} className="my-movie-link">
					{buttonContent}
				</NavLink>
			</button>
		</Link>
	)
}

export default NavButton
