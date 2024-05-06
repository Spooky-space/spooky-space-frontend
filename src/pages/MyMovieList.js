import React, { useEffect, useState } from "react"
import Modals from "../components/modal/Modal"
import EditList from "../components/modal/EditList"
import Slider from "../components/slider"
import { useNavigate } from "react-router-dom"
import "./MyMovieList.css"
import Card from "../components/card/Card"
import { Spinner } from "reactstrap"
import NavButton from "../components/NavButton"
import MovieGrid from "../components/moviegrid/MovieGrid"

const MyMovieList = ({ list, user, deleteList, updateList, getList }) => {
	return (
		<div className="page-body">
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
