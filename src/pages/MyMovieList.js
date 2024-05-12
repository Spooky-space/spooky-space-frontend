import React, { useEffect, useState } from "react"
import "./MyMovieList.css"
import MovieGrid from "../components/moviegrid/MovieGrid"

const MyMovieList = ({ list, user, deleteList, updateList, getList }) => {
	return (
		<div className="my-movie-page-body">
			<div className="content-wrapper">
				<div className="my-lists-header">
					<div className="header-container">
						<h1 className="header">My List</h1>
					</div>
				</div>
				<div className="title">
					<h2 className="header">Watchlist</h2>
				</div>
				<MovieGrid
					list={list}
					user={user}
					deleteList={deleteList}
					updateList={updateList}
					getList={getList}
				/>
			</div>
		</div>
	)
}

export default MyMovieList
