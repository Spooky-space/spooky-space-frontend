import React from "react"
import useHorrorMovies from "../tmdbService"
import Slider from "./slider"

const HorrorMovies = () => {
	const { movies, isLoading, error } = useHorrorMovies()
	const imageUrlBase = "https://image.tmdb.org/t/p/w500"

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error Loading Movies: {error.message}</div>

	return (
		<div>
			<h1>HorrorMovies</h1>
			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>
						<img src={imageUrlBase + movie.poster_path} alt={movie.title} />
						<br />
						{movie.title}
					</li>
				))}
			</ul>
			{movies.length > 0 && (
				<Slider movies={movies}>
					{movies.map((movie) => (
						<Slider.Item movie={movie} key={movie.id}></Slider.Item>
					))}
				</Slider>
			)}
		</div>
	)
}

export default HorrorMovies
