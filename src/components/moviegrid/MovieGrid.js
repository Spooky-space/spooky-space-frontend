import React, { useEffect, useState } from "react"
import Card from "../card/Card"
import "./MovieGrid.css"

const MovieGrid = ({ list, user, deleteList, updateList, getList }) => {
	const movies = list?.filter((movie) => movie.user_id === user.id)

	return (
		<div className="movie-grid" key={movies.id}>
			{movies.map((movie) => (
				<Card
					movie={movie}
					key={movie.id}
					deleteList={deleteList}
					updateList={updateList}
					user={user}
					getList={getList}
				/>
			))}
		</div>
	)
}

export default MovieGrid
