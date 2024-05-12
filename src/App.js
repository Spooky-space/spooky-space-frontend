import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Home from "./pages/Home.js"
import Show from "./pages/Show"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import MyMovieList from "./pages/MyMovieList.js"
import { useNavigate } from "react-router-dom"

import "./App.css"

const App = () => {
	const [user, setUser] = useState(null)
	const [list, setList] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		const checkForLoggedInUser = localStorage.getItem("user")
		if (checkForLoggedInUser) setUser(JSON.parse(checkForLoggedInUser))
		getList()
	}, [])

	const signIn = async (user) => {
		try {
			const signInResponse = await fetch(
				"https://spooky-space-backend.onrender.com/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify(user),
				}
			)
			if (!signInResponse) {
				throw new Error(signInResponse.errors)
			}
			const payload = await signInResponse.json()
			if (signInResponse.ok) {
				localStorage.setItem(
					"token",
					signInResponse.headers.get("Authorization")
				)
				localStorage.setItem("user", JSON.stringify(payload))
				setUser(payload)
				navigate("/")
			}
		} catch (error) {
			console.log("Error fetching sign-in data:", error)
			return false // Return false for failed sign-in
		}
	}

	const signUp = async (user) => {
		console.log(user)
		try {
			const signUpResponse = await fetch(
				"https://spooky-space-backend.onrender.com/signup",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify(user),
				}
			)
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
			const signOutResponse = await fetch(
				"https://spooky-space-backend.onrender.com/logout",
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token"),
					},
				}
			)
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
			const getResponse = await fetch(
				"https://spooky-space-backend.onrender.com/list_adds"
			)
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
			const postResponse = await fetch(
				"https://spooky-space-backend.onrender.com/list_adds",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newList),
				}
			)
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
				`https://spooky-space-backend.onrender.com/list_adds/${id}`,
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
			const response = await fetch(
				`https://spooky-space-backend.onrender.com/list_adds/${id}`,
				{
					method: "DELETE",
				}
			)
			if (!response.ok) {
				throw new Error("Error on the delete request")
			}
			getList()
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}
	return (
		<>
			<Header logOut={logOut} user={user} />
			<Routes>
				{!user && (
					<Route
						path="/"
						element={<Landing signIn={signIn} signUp={signUp} />}
					/>
				)}
				{user && <Route path="/" element={<Home />} />}
				{user && (
					<Route
						path="/show/:id"
						element={<Show createList={createList} user={user} />}
					/>
				)}
				{user && (
					<Route
						path="/mymovielist"
						element={
							<MyMovieList
								getList={getList}
								list={list}
								user={user}
								deleteList={deleteList}
								updateList={updateList}
							/>
						}
					/>
				)}
				<Route path="*" element={<NotFound />} />
				{Location.pathname === "*" && <Footer />}
			</Routes>
			<Footer />
		</>
	)
}

export default App
