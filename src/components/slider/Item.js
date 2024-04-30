import React from "react"
// used to apply dynamic classes depending on a components state
import cx from "classnames"
// imports state and handling from a higher component
import SliderContext from "./context"
import ShowDetailsButton from "./ShowDetailsButton"
import Mark from "./Mark"
import "./Item.css"

const Item = ({ movie }) => (
	<SliderContext.Consumer>
		{({ onSelectSlide, currentSlide, elementRef }) => {
			// checks to see if the current slide has the same id as the movie id
			const isActive = currentSlide && currentSlide.id === movie.id

			const imageUrlBase = "https://image.tmdb.org/t/p/w500"

			return (
				<div
					// sets slides dimensions
					ref={elementRef}
					// dynamic css class name
					className={cx("item", {
						"item-open": isActive,
					})}
				>
					<img src={imageUrlBase + movie.backdrop_path} alt={movie.title} />
					{/* handles the styling of when the slide is clicked and updates state */}
					<ShowDetailsButton onClick={() => onSelectSlide(movie)} />
					{/* sets the slide to appear marked when clicked */}
					{isActive && <Mark />}
				</div>
			)
		}}
	</SliderContext.Consumer>
)

export default Item
