import React from "react"
import IconArrowDown from "./IconArrowDown"
import "./ShowDetailsButton.css"
// simple button that controls what happens when you click on the slide and what appears when you hover over it
const ShowDetailsButton = ({ onClick }) => (
	<button onClick={onClick} className="show-details-button">
		<span className="show-details-span">
			<IconArrowDown />
		</span>
	</button>
)

export default ShowDetailsButton
