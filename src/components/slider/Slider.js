import React, { useState } from "react"
import cx from "classnames"
import SliderContext from "./context"
import Content from "./Content"
import SlideButton from "./SlideButton"
import SliderWrapper from "./SliderWrapper"
import useSliding from "./useSliding"
import useSizeElement from "./useSizeElement"
import "./Slider.css"

const Slider = ({ children, movie }) => {
	// state for the current slide
	const [currentSlide, setCurrentSlide] = useState(movie)
	// state to handle our useSizeElement
	const { width, elementRef } = useSizeElement()
	const { handlePrev, handleNext, slideProps, containerRef, hasNext, hasPrev } =
		useSliding(width, React.Children.count(children))
	// handles the selecting of a slide
	const handleSelect = (movie) => {
		setCurrentSlide(movie)
	}
	// handles the closing of a slides content
	const handleClose = () => {
		setCurrentSlide(null)
	}
	// defines the context to be passed to Slider context
	const contextValue = {
		onSelectSlide: handleSelect,
		onCloseSlide: handleClose,
		elementRef,
		currentSlide,
	}

	return (
		<SliderContext.Provider value={contextValue}>
			<SliderWrapper>
				{/* dynamic css to apply to current slide when its open */}
				<div className={cx("slider", { "slider-open": currentSlide != null })}>
					{/* sets the container size */}
					<div ref={containerRef} className="slider-container" {...slideProps}>
						{children}
					</div>
				</div>
				{/* sets the action of the slide button when hasprev and hasnext are met */}
				{hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
				{hasNext && <SlideButton onClick={handleNext} type="next" />}
			</SliderWrapper>
			{/* renders the content of each item */}
			{currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
		</SliderContext.Provider>
	)
}

export default Slider
