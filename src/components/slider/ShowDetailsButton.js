import React from "react"
import IconArrowDown from "./IconArrowDown"
import "./ShowDetailsButton.css"
import { Link } from "react-scroll"
// simple button that controls what happens when you click on the slide and what appears when you hover over it
const ShowDetailsButton = ({ onClick }) => (
	<Link to="content" smooth={true} duration={500} onClick={onClick}>
		<button onClick={onClick} className="show-details-button">
			<span className="show-details-span">
				<IconArrowDown />
			</span>
		</button>
	</Link>
)

export default ShowDetailsButton
