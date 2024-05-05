import React from "react"
import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer"
import footerphoto from "../assets/footer-photo.png" // Ensure this import path matches your actual image path

test("renders the Footer component with text and image", () => {
  render(<Footer />)

  // Check for the footer text
  const footerText = screen.getByText(
    /Mark | Amir | Seth | Matt | Learn Academy Alpha 2024/
  )
  expect(footerText).toBeInTheDocument()

  // Check for the image
  const footerImage = screen.getByAltText(
    "multiple popular horror movie characters"
  )
  expect(footerImage).toBeInTheDocument()
  expect(footerImage).toHaveAttribute("src", footerphoto)
})
