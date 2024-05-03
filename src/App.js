import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Home from "./pages/Home.js"
import Show from "./pages/Show"
import MyComments from "./pages/MyComments.js"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import MyMovieList from "./pages/MyMovieList.js"
import AddMovie from "./pages/AddMovie"
import EditMovie from "./pages/EditList"
import "./App.css"

const App = () => {
	const [user, setUser] = useState(null)
	const [list, setList] = useState([])
	const [comment, setComment] = useState(null)

	const signIn = async (user) => {
		try {
			const signInResponse = await fetch("http://localhost:3000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(user),
			})
			if (!signInResponse) {
				throw new Error(signInResponse.errors)
			}
			const payload = await signInResponse.json()
			localStorage.setItem("token", signInResponse.headers.get("Authorization"))
			localStorage.setItem("user", JSON.stringify(payload))
			setUser(payload)
		} catch (error) {
			console.error("Error fetching user sign in request")
		}
	}

	const signUp = async (user) => {
		try {
			const signUpResponse = await fetch("http://localhost:3000/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(user),
			})
			if (!signUpResponse) {
				throw new Error(signUpResponse.errors)
			}
			const payload = await signUpResponse.json()
			localStorage.setItem("token", signUpResponse.headers.get("Authorization"))
			localStorage.setItem("user", JSON.stringify(payload))
			setUser(payload)
		} catch (error) {
			console.error("Error fetching user sign up request")
		}
	}

	const logOut = async () => {
		try {
			const signOutResponse = await fetch("http://localhost:3000/logout", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.getItem("token"),
				},
			})
			if (!signOutResponse) {
				throw new Error(signOutResponse.errors)
			}
			await signOutResponse.json()
			setUser(null)
			localStorage.removeItem("token")
			localStorage.removeItem("user")
		} catch (error) {
			console.error("Error fetching user sign out request")
		}
	}

	const getList = async () => {
		try {
			const getResponse = await fetch("http://localhost:3000/list_adds")
			if (!getResponse.ok) {
				throw new Error("Error on the get request for movie list")
			}
			const getResult = await getResponse.json()
			setList(getResult)
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}
	const createList = async (newList) => {
		try {
			const postResponse = await fetch("http://localhost:3000/list_adds", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newList),
			})
			if (!postResponse.ok) {
				throw new Error("Error on the post request for movie list")
			}
			await postResponse.json()
			getList()
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}
	const updateList = async (editList, id) => {
		console.log("editList:", editList)
		console.log("id:", id)
		try {
			const patchResponse = await fetch(
				`http://localhost:3000/list_adds/${id}`,
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(editList),
				}
			)
			if (!patchResponse.ok) {
				throw new Error("Error on the patch request for movie list")
			}
			await patchResponse.json()
			getList()
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}
	const deleteList = async (id) => {
		try {
			const response = await fetch(`http://localhost:3000/list_adds/${id}`, {
				method: "DELETE",
			})
			if (!response.ok) {
				throw new Error("Error on the delete request")
			}
			getList()
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}

	const getComment = async () => {
		try {
			const getResponse = await fetch("http://localhost:3000/forums")
			if (!getResponse.ok) {
				throw new Error("Error on the get request for Comments")
			}
			const getResult = await getResponse.json()
			setComment(getResult)
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}
	const createComment = async (newComment) => {
		try {
			const postResponse = await fetch("http://localhost:3000/forums", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newComment),
			})
			if (!postResponse.ok) {
				throw new Error("Error on the post request for Comments")
			}
			await postResponse.json()
			getComment()
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}
	const updateComment = async (editComment, id) => {
		console.log("editComment:", editComment)
		console.log("id:", id)
		try {
			const patchResponse = await fetch(`http://localhost:3000/forums/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(editComment),
			})
			if (!patchResponse.ok) {
				throw new Error("Error on the patch request for Comment")
			}
			await patchResponse.json()
			getComment()
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}

	const deleteComment = async (id) => {
		try {
			const response = await fetch(`http://localhost:3000/forums/${id}`, {
				method: "DELETE",
			})
			if (!response.ok) {
				throw new Error("Error on the delete request")
			}
			getComment()
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/show/:id" element={<Show />} />
				{user && (
					<Route
						path="/myMovieList"
						element={
							<MyMovieList list={list} user={user} deletelist={deleteList} />
						}
					/>
				)}
				{user && (
					<Route
						path="/addMovie"
						element={<AddMovie createList={createList} user={user} />}
					/>
				)}
				{user && (
					<Route
						path="/list-edit/:id"
						element={
							<EditMovie list={list} updateList={updateList} user={user} />
						}
					/>
				)}
				<Route path="notFound" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
