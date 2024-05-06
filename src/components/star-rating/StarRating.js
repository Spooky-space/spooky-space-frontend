import React, { useState, useEffect } from "react"
import { Rating } from "react-simple-star-rating"

const StarRating = ({ movie, getList }) => {
	const [rating, setRating] = useState(0)

	const handleRating = (rate) => {
		setRating(rate)
		updateList({ rating: rate }, movie.id)
	}
	const updateList = async (rating, id) => {
		try {
			const patchResponse = await fetch(
				`http://localhost:3000/list_adds/${id}`,
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
	return (
		<div className="star-rating">
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
