import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NavButton from "../components/NavButton"

test("renders NavButton with correct text and links to the correct path", () => {
  const url = "/test-path"
  const buttonContent = "Test Button"

  render(
    <BrowserRouter>
      <NavButton url={url} buttonContent={buttonContent} />
    </BrowserRouter>
  )

  const button = screen.getByRole("button", { name: buttonContent })
  expect(button).toBeInTheDocument() // Check if the button is in the document
  expect(button.closest("a")).toHaveAttribute("href", url) // Check if the button's link is correct
})
