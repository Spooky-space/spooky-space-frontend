import React, { useState } from "react"
import IconArrowDown from "./IconArrowDown"
import "./ShowDetailsButton.css"
import { Link } from "react-scroll"
// simple button that controls what happens when you click on the slide and what appears when you hover over it
const ShowDetailsButton = ({ onClick }) => {
	return (
		<Link
			onClick={onClick}
			className="show-details-button"
			to="content"
			smooth={true}
			duration={500}
		>
			<span className="show-details-span">
				<IconArrowDown />
			</span>
		</Link>
	)
}
export default ShowDetailsButton
