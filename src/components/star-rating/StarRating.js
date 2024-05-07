import React, { useState, useEffect } from "react"
import { Rating } from "react-simple-star-rating"
import Star from "../../assets/star.png"

const StarRating = ({ movie, getList }) => {
	const [rating, setRating] = useState(0)

	const handleRating = (rate) => {
		setRating(rate)
		updateList({ rating: rate }, movie.id)
	}
	const updateList = async (rating, id) => {
		try {
			const patchResponse = await fetch(
				`https://spooky-space-backend.onrender.com/list_adds/${id}`,
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(rating),
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
	const handleReset = () => {
		setRating(0)
		updateList({ rating: 0 }, movie.id)
	}
	return (
		<div className="star-rating">
			<button onClick={handleReset} className="star-button">
				<img className="star-button" src={Star} />
			</button>
			<Rating
				className="star-rating"
				onClick={handleRating}
				initialValue={movie.rating}
				/* Available Props */
			/>
		</div>
	)
}

export default StarRating
