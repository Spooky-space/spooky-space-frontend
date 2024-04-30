import React from "react"
import HorrorMovies from "../components/HorrorMovies"

const Home = ({ movies }) => {
	return (
		<div className="page-body">
			<div className="home-content">
				<h1 className="home-header">Spooky Space Top Picks</h1>
				<HorrorMovies />
			</div>
		</div>
	)
}

export default Home
