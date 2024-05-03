import React from "react"
import { Routes, Route } from "react-router-dom"
import useHorrorMovies from "./components/HorrorMovies"
import Landing from "./pages/Landing"
import Home from "./pages/Home.js"
import Show from "./pages/Show"
import MyFlix from "./pages/MyFlix"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import "./App.css"

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/show/:id" element={<Show />} />
				<Route path="notFound" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
