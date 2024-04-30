import React from "react"
import NavButton from "../NavButton"
import "./Content.css"

const imageUrlBase = "https://image.tmdb.org/t/p/original"

const Content = ({ movie, onClose, genre }) => {
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
						<h3>Release Date: {movie.release_date}</h3>
						<h5>Rating: {movie.vote_average.toFixed(1)}/10</h5>
						<h5>{genre}</h5>
						<div className="content-button">
							<NavButton url={`/movie/${movie.id}`} buttonContent="See More" />
						</div>
					</div>
				</div>
				<button className="content-close" onClick={onClose}>
					<h1>x</h1>
				</button>
			</div>
		</div>
	)
}
export default Content
