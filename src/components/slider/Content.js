import React from "react"
import IconCross from "./IconCross"
import NavButton from "../NavButton"
import "./Content.css"

const Content = ({ movie, onClose }) => {
	const imageUrlBase = "https://image.tmdb.org/t/p/w500"
	return (
		<div className="content">
			<div className="content-background">
				<div className="content-background-shadow" />
				<div
					className="content-background-image"
					style={{
						backgroundImage: `url(${imageUrlBase + movie.backdrop_path})`,
					}}
				/>
			</div>
			<div className="content-area">
				<div className="content-area-container">
					<div className="content-title">{movie.title}</div>
					<div className="content-description">
						<h3>{movie.rating}</h3>
						<h5>{movie.runtime},</h5>
						<h5>{movie.genre}</h5>
						<div className="content-button">
							<NavButton url={`/movie/${movie.id}`} buttonContent="See More" />
						</div>
					</div>
				</div>
				<button className="content-close" onClick={onClose}>
					<IconCross />
				</button>
			</div>
		</div>
	)
}
export default Content
