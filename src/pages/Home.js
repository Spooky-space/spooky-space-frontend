import React from "react"
import HorrorMovies from "../components/HorrorMovies"
import Banner from "../assets/index-Red-Banner.png"

const Home = () => {
	return (
		<div className="page-body">
			<div className="home-content">
				<h1 className="home-header">Spooky Space Top Picks</h1>
				<div className="home-banner-container">
					<img
						className="home-banner"
						src={Banner}
						alt=" red banner with ghost face with text reading whats your favorite movie"
					/>
				</div>
				<HorrorMovies />
			</div>
		</div>
	)
}

export default Home
