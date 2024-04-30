import React from "react"
import { Routes, Route } from "react-router-dom"
import useHorrorMovies from "./components/HorrorMovies"
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Show from "./pages/Show"
import MyFlix from "./pages/MyFlix"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import "./App.css"

const App = () => {
	const { movies } = useHorrorMovies()
	console.log(movies)
	return (
		<>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home movies={movies} />} />
				<Route path="/show" element={<Show />} />
				<Route path="notFound" element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
