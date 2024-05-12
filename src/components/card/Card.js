import { useEffect, useState } from "react"
import "./Card.css"
import axios from "axios"
import { apiConfig } from "../../apiConfig"
import { useNavigate } from "react-router-dom"
import Trashcan from "../../assets/delete.png"
import NotWatched from "../../assets/notwatched.png"
import StarRating from "../star-rating/StarRating"
import Watched from "../../assets/watched.png"

const Card = ({ movie, deleteList, getList }) => {
	const navigate = useNavigate()
	const imageUrlBase = "https://image.tmdb.org/t/p/original"

	const [movieData, setMovieData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [isWatched, setIsWatched] = useState(false)
	const [movieWatched, setMovieWatched] = useState(false)
	const [watchedIcon, setWatchedIcon] = useState(movieWatched)
	const { tmdb_api_id } = movie
	const id = tmdb_api_id

	useEffect(() => {
		fetchMovie()
	}, [id])

	const fetchMovie = async () => {
		try {
			const response = await axios.get(`${apiConfig.baseURL}movie/${id}`, {
				params: { api_key: apiConfig.api_key },
				headers: apiConfig.headers,
			})
			setMovieData(response.data)
		} catch (error) {
		} finally {
			setIsLoading(false)
		}
	}
	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!movie) {
		return <div>No movie found.</div>
	}

	const handleDeleteList = (id) => {
		alert("Are you sure you want to delete this movie?")
		deleteList(id)
	}
	const updateList = async (watched, id) => {
		console.log("Watched:", watched)
		console.log("Id:", id)
		try {
			const patchResponse = await fetch(
				`https://spooky-space-backend.onrender.com/list_adds/${id}`,
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(watched),
				}
			)
			if (!patchResponse.ok) {
				throw new Error("Error on the patch request for movie list")
			}
			await patchResponse.json()
			getList()
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}
	const handleWatched = () => {
		if (!isWatched) {
			setWatchedIcon(Watched)
			setIsWatched(true)
			setMovieWatched(true)
			alert(`You've Watched ${movieData.title}`)
		} else {
			setWatchedIcon(NotWatched)
			setIsWatched(false)
			setMovieWatched(true)
		}
		updateList({ watched: isWatched }, movie.id)
	}
	return (
		<div className="my-lists-collection">
			<div className="my-lists-item">
				<div className="card">
					<div className="card-image-wrapper">
						<a href={`/show/${id}`}>
							<img
								className="card-image"
								src={imageUrlBase + movieData.poster_path}
								alt={movie.title}
							/>
						</a>
					</div>
					<div className="card-body">
						<div className="card-title-container">
							<a className="card-title">
								<p className="card-text">{movieData.title}</p>
							</a>
						</div>
						<div className="card-body-footer">
							<div className="card-footer-left">
								<div className="card-genres">
									<p className="card-genre">{movieData.genres[0].name} </p>{" "}
									<p className="card-genre"> {movieData.genres[1].name}</p>
								</div>
								<div className="star-rating">
									<StarRating movie={movie} getList={getList} />
								</div>
							</div>
							<div className="card-actions">
								<div className="card-action-button-container">
									<button
										className="card-action-button"
										onClick={handleWatched}
									>
										<img
											src={movieWatched}
											alt={
												movie.watched ? "Watched Eye icon" : "NotWatched icon"
											}
											className="card-action-icon"
										/>
									</button>
									<button
										onClick={() => handleDeleteList(movie.id)}
										className="card-action-button"
									>
										<img
											src={Trashcan}
											alt="delete trashcan icon"
											className="card-action-icon"
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
