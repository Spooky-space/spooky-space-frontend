import { useState, useRef, useEffect } from "react"
// custom react hook
const useSizeElement = () => {
	// allows access to a DOM element accessing its data (dimensions)
	const elementRef = useRef(null)
	// sets the state for the elements width
	const [width, setWidth] = useState(0)

	useEffect(() => {
		// applies the new width based on the elements original dimensions
		setWidth(elementRef.current.clientWidth)
	}, [elementRef.current])
	// returns width and initial dimensions to be used as a custom react hook
	return { width, elementRef }
}

export default useSizeElement
