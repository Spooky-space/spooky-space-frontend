import { useState, useRef, useEffect } from "react"
// sets constant padding to control visible area for sliding elements
const PADDINGS = 110
// custom react hook to handle sliding effect
const useSliding = (elementWidth, countElements) => {
	// accessing the containers DOM properties
	const containerRef = useRef(null)
	// the adjusted with of the container accounting for padding
	const [containerWidth, setContainerWidth] = useState(0)
	// tracks the distance for the slider
	const [distance, setDistance] = useState(0)
	// sets the number of items displayed on the screen
	const [totalInViewport, setTotalInViewport] = useState(0)
	// sets the number of elements moved out of view on the left
	const [viewed, setViewed] = useState(0)

	useEffect(() => {
		const containerWidth = containerRef.current.clientWidth - PADDINGS
		// calculates the container width minus padding
		setContainerWidth(containerWidth)
		// shows how many items can be viewed then updates state
		setTotalInViewport(Math.floor(containerWidth / elementWidth))
	}, [containerRef.current])

	// handles the movement of items on the  left causing the sliding to the right appearance
	const handlePrev = () => {
		// defines how many are moved back into view
		setViewed(viewed - totalInViewport)
		// sets the distance they must travel
		setDistance(distance + containerWidth)
	}
	// handles the movement of items on the right causing the sliding to the left appearance
	const handleNext = () => {
		// defines how many are moved back into view
		setViewed(viewed + totalInViewport)
		// sets the distance they must travel
		setDistance(distance - containerWidth)
	}

	// inline styling defining the sliding motion
	const slideProps = {
		// x = distance
		style: { transform: `translate3d(${distance}px, 0, 0)` },
	}

	// boolean checking to see if there are items to the left to be slid back into view
	const hasPrev = distance < 0
	//boolean checking to see if their are items on the right to be slid in view
	const hasNext = viewed + totalInViewport < countElements

	return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext }
}

export default useSliding
