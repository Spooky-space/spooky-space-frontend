import React, { useState } from "react"
import Modals from "../components/modal/Modal"
import EditList from "../components/modal/EditList"
import Slider from "../components/slider"
import { useNavigate } from "react-router-dom"
import "./MyMovieList.css"

const MyMovieList = ({ list, user, deleteList }) => {
	const navigate = useNavigate()
	const { myMovies, setMyMovies } = useState([])
	const movies = list?.filter((movie) => movie.user_id === user.id)
	console.log(myMovies)
	const handleDeleteList = (id) => {
		alert("Are you sure you want to delete this movie?")
		deleteList(id)
		navigate("/mymovielist")
	}
	const handleAction = () => {
		// console.log("Action performed")
	}

	const handleCancel = () => {
		// console.log("Cancelled")
	}
	return (
		<div className="page-body">
			<div className="page-body">
				<h1>Movies I need to watch</h1>
			</div>
			<Modals
				title="Edit Movie"
				body={<EditList />}
				onAction={handleAction}
				onCancel={handleCancel}
			/>
		</div>
	)
}

export default MyMovieList
