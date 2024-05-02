import React from "react"
import footerphoto from "../assets/footer-photo.png"

const Footer = () => {
  return (
    <footer className="footer-bar">
      <div>
        <p className="footer-text">&copy Mark | Amir | Seth | Matt</p>
      </div>
      <div>
        <img
          src={footerphoto}
          alt="multiple popular horror movie characters"
          className="footer-photo"
        />
      </div>
    </footer>
  )
}

export default Footer
