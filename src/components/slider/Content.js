import React from "react"
import NavButton from "../NavButton"
import "./Content.css"
import { Link } from "react-scroll"

const imageUrlBase = "https://image.tmdb.org/t/p/original"

const Content = ({ movie, onClose, genreList, slider }) => {
	const genres = genreList.filter(
		(obj) =>
			obj[movie.genre_ids[0]] ||
			obj[movie.genre_ids[1]] ||
			obj[movie.genre_ids[2]]
	)
	const genreName = genres.map((obj) => Object.values(obj)).flat()
	console.log("genre:", genreName[0])
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
					<div className="content-description">
						<div className="content-title">{movie.title}</div>
						<h3 className="content-description">
							Release Date: {movie.release_date}
						</h3>
						<h3 className="content-description">
							Rating: {movie.vote_average.toFixed(1)}/10
						</h3>
						<div className="span-container">
							<span className="content-span">{genreName[0]}</span>{" "}
							<span className="content-span">{genreName[1]}</span>{" "}
							<span className="content-span">{genreName[2]}</span>
						</div>
						<div className="content-button">
							<NavButton
								url={`/show/${movie.id}`}
								buttonContent="See More"
								className="button"
							/>
						</div>
					</div>
				</div>
				<Link
					className="content-close"
					to={slider}
					smooth={true}
					duration={500}
				>
					<button className="content-close" onClick={onClose}>
						<h1 className="content-close-x">x</h1>
					</button>
				</Link>
			</div>
		</div>
	)
}
export default Content
