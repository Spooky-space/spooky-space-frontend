import React from "react"
import footerphoto from "../assets/footer-photo.png"

const Footer = () => {
	return (
		<div className="footer-bar">
			<h4 className="footer-text">
				{" "}
				&copy; Mark | Amir | Seth | Matt | Learn Academy Alpha 2024
			</h4>
			<img
				src={footerphoto}
				alt="multiple popular horror movie characters"
				className="footer-photo"
			/>
		</div>
	)
}

export default Footer
