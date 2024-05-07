import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Freddy from "../../assets/spooky-user/freddy.webp"
import Ghost from "../../assets/spooky-user/ghost.webp"
import Ghost2 from "../../assets/spooky-user/ghost2.webp"
import Jason from "../../assets/spooky-user/jason.webp"
import Jason2 from "../../assets/spooky-user/jason2.webp"
import Undead from "../../assets/spooky-user/undead.png"
import Vampire from "../../assets/spooky-user/vampire.webp"
import Vampire2 from "../../assets/spooky-user/vampire2.webp"
import Zombie from "../../assets/spooky-user/zombie.webp"
import Zombie2 from "../../assets/spooky-user/zombie2.webp"

import "./Comment.css"
import Trashcan from "../../assets/delete.png"
import Pencil from "../../assets/edit.png"
import {
	CommentText,
	CommentMetadata,
	CommentGroup,
	CommentAction,
	FormTextArea,
	Comment,
	Form,
	Header,
} from "semantic-ui-react"

const CommentSection = ({ user, movie }) => {
	const [comments, setComments] = useState([])
	const [commentText, setCommentText] = useState("")
	const [image, setImage] = useState(null)
	const Image = [
		Freddy,
		Ghost,
		Ghost2,
		Jason,
		Jason2,
		Undead,
		Vampire,
		Vampire2,
		Zombie,
		Zombie2,
	]

	useEffect(() => {
		getComment()
	}, [])

	const getComment = async () => {
		try {
			const getResponse = await fetch(
				`http://localhost:3000/forums/${movie.id}`
			)
			if (!getResponse.ok) {
				throw new Error("Error on the get request for Comments")
			}
			const getResult = await getResponse.json()
			setComments(getResult)
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
	const updateComment = async (comment, id) => {
		console.log("updatedcomment:", comment)
		console.log("id:", id)
		try {
			const patchResponse = await fetch(`http://localhost:3000/forums/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(comment),
			})
			if (!patchResponse.ok) {
				throw new Error("Error on the patch request for comment")
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
	const handleAddComments = () => {
		const newComment = {
			tmdb_api_id: movie.id,
			comment: commentText,
			username: user.username,
			user_id: user.id,
		}
		createComment(newComment)
		setCommentText("")
		setImage(userImage(1))
	}
	const userImage = () => {
		let index = Math.floor(Math.random() * 10)
		let avatar = Image[index]
		return avatar
	}
	const handleDeleteComment = (id) => {
		alert("Are you sure you want to delete this comment?")
		deleteComment(id)
	}
	console.log(comments)
	return (
		<div className="comment-section-wrapper">
			<div className="comment-section-body">
				<div className="comment-header-form-wrapper">
					<div className="comment-header-wrapper">
						<Header
							as="h3"
							dividing
							style={{
								fontSize: "50px",
								color: "whitesmoke",
								fontFamily: "Metal Mania",
								webkitTextStroke: "1px black",
							}}
						>
							Comments
						</Header>
					</div>
					<div className="comment-form-wrapper">
						<Form reply>
							<FormTextArea
								value={commentText}
								onChange={(e) => setCommentText(e.target.value)}
								style={{
									background: "rgba(10,10,10,0.7)",
									color: "whitesmoke",
								}}
							/>
							<div className="add-comment-button-wrapper">
								<button
									className="comment-nav-button"
									onClick={handleAddComments}
									labelPosition="left"
								>
									<NavLink className="comment-nav-link">Add a Comment</NavLink>
								</button>
							</div>
						</Form>
					</div>
				</div>
				<div className="comments-wrapper">
					{comments &&
						comments.map((comment) => (
							<CommentGroup>
								<div className="comment-wrapper">
									<Comment
										key={comments.id}
										style={{
											width: "100%",
											borderBottom: "2px solid rgba(245, 245, 245, 0.1)",
										}}
									>
										<div
											style={{
												height: "5vh !important",
											}}
										>
											<CommentMetadata
												style={{
													color: "whitesmoke",
													width: "100%",
													fontFamily: "cinzel",
												}}
											>
												<div
													style={{
														display: "flex",
														alignItems: "flex-end",
														width: "100% !important",
														height: "10% !important",
													}}
												>
													<img
														src={image}
														style={{
															objectFit: "scale-down",
															height: "50px",
															borderRadius: "50%",
														}}
													/>
													<h2
														style={{
															fontFamily: "Metal Mania",
															marginBottom: "5px",
															padding: "0 5px",
														}}
													>
														{comment.username}
													</h2>{" "}
													<p
														style={{
															fontFamily: "Cinzel",
															marginBottom: "10px",
															fontSize: "14px",
															fontWeight: "700",
															opacity: "50%",
														}}
													>
														{comment.created_at}
													</p>
												</div>
											</CommentMetadata>
											<CommentText
												style={{
													margin: ".5em",
													color: "whitesmoke",
													fontFamily: "Cinzel",
													fontSize: "20px",
												}}
											>
												{comment.comment}
											</CommentText>
											<CommentAction>
												<div className="comment-icon-wrapper">
													<button className="comment-icon-button">
														<img
															src={Pencil}
															alt="Edit icon"
															className="comment-edit-icon"
														/>
													</button>
													<button
														onClick={() => handleDeleteComment(comment.id)}
														className="comment-icon-button"
													>
														<img
															src={Trashcan}
															alt="delete icon"
															className="comment-delete-icon"
														/>
													</button>
												</div>
											</CommentAction>
										</div>
									</Comment>
								</div>
							</CommentGroup>
						))}
				</div>
			</div>
		</div>
	)
}

export default CommentSection
