import React, { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"
import axios from "axios"
import { apiConfig } from "../apiConfig"
import backBtn from "../assets/back-btn.png"
import AddMovie from "./AddMovie"
import Comment from "../components/comment/MovieComments"

const Show = ({ user, createList }) => {
	const imageUrlBase = "https://image.tmdb.org/t/p/original"
	const smallImageUrlBase = "https://image.tmdb.org/t/p/w500"
	const { id } = useParams()
	const [movie, setMovie] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetchMovie()
	}, [id])

	const fetchMovie = async () => {
		try {
			const response = await axios.get(`${apiConfig.baseURL}movie/${id}`, {
				params: { api_key: apiConfig.api_key },
				headers: apiConfig.headers,
			})
			setMovie(response.data)
		} catch (error) {
		} finally {
			setIsLoading(false)
		}
	}

	if (isLoading) return <div>Loading...</div>

	if (!movie) return <div>No movie found.</div>

	return (
		<div className="show-body">
			<div className="show-background">
				<div className="show-background-shadow" />
				<div
					className="show-background-image"
					style={{
						backgroundImage: `url(${imageUrlBase + movie.backdrop_path})`,
					}}
				/>
			</div>

			<div className="movie-info">
				<NavLink to={"/"}>
					<img src={backBtn} className="img-back" />
				</NavLink>
				<div className="show-poster-container">
					<img
						src={smallImageUrlBase + movie.poster_path}
						alt={movie.title}
						style={{
							objectFit: "cover",
							width: "250px",
							height: "350px",
							marginRight: "15px",
						}}
					/>
					<AddMovie createList={createList} user={user} movie={movie} />
				</div>

				<div className="movie-details">
					<h1 className="movie-title">{movie.title}</h1>
					<p className="tagline">{movie.tagline}</p>
					<p className="release-date">{movie.release_date}</p>
					<p className="run-time">{movie.runtime} Minutes</p>
					<p className="vote-average">{movie.vote_average.toFixed(1)} /10</p>
					<div className="genre-container">
						<p className="movie-genre">{movie.genres[0].name}</p>
						<p className="movie-genre">{movie.genres[1].name}</p>
					</div>
				</div>
			</div>

			<div className="overview-container">
				<p className="overview">{movie.overview}</p>
			</div>
			<hr />
			<div className="comment-section">
				<Comment user={user} movie={movie} />
			</div>
		</div>
	)
}

export default Show
