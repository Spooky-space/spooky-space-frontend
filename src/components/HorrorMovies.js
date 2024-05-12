import React from "react"
import useHorrorMovies from "../tmdbService"
import Slider from "./slider"

const HorrorMovies = () => {
	const { movies, isLoading, error, genreList } = useHorrorMovies()
	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error Loading Movies: {error.message}</div>
	const rating = () => {
		return movies.slice().sort((a, b) => b.vote_average - a.vote_average)
	}
	const aToZ = () => {
		return movies.slice().sort((a, b) => {
			const titleA = a.title.toUpperCase()
			const titleB = b.title.toUpperCase()
			if (titleA < titleB) {
				return -1
			}
			if (titleA > titleB) {
				return 1
			}
			return 0
		})
	}
	return (
		<div>
			<div>
				<h1 name="most-popular" className="home-slider-header">
					Most Popular
				</h1>
				{movies.length > 0 && (
					<Slider movie={movies} genreList={genreList} slider={"most-popular"}>
						{movies.map((movie) => (
							<Slider.Item
								movie={movie}
								key={movie.id}
								slider={"most-popular-anchor"}
							></Slider.Item>
						))}
					</Slider>
				)}
				<br name="most-popular-anchor" />
			</div>
			<div>
				<h1 name="highest-rated" className="home-slider-header">
					Highest Rated
				</h1>
				{movies.length > 0 && (
					<Slider
						movie={rating()}
						genreList={genreList}
						slider={"highest-rated-anchor"}
					>
						{rating().map((movie) => (
							<Slider.Item
								movie={movie}
								key={movie.id}
								slider={"a-to-z"}
							></Slider.Item>
						))}
					</Slider>
				)}
				<br name="highest-rated-anchor" />
			</div>
			<div>
				<h1 name="a-to-z" className="home-slider-header">
					A to Z
				</h1>
				{movies.length > 0 && (
					<Slider movie={aToZ()} genreList={genreList} slider={"a-to-z"}>
						{aToZ().map((movie) => (
							<Slider.Item
								movie={movie}
								key={movie.id}
								slider={"a-to-z-anchor"}
							></Slider.Item>
						))}
					</Slider>
				)}
				<br name="a-to-z-anchor" />
			</div>
		</div>
	)
}

export default HorrorMovies
