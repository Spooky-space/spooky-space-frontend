import React from "react"
import IconArrowDown from "./IconArrowDown"
import "./SlideButton.css"

const SlideButton = ({ onClick, type }) => {
	return (
		<button className={`slide-button slide-button-${type}`} onClick={onClick}>
			<span>
				<IconArrowDown />
			</span>
		</button>
	)
}

export default SlideButton
