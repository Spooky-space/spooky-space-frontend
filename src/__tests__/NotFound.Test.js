import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"

test("renders NotFound component", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )

  const notFoundText = screen.getByText(
    /Are you lost\.\.\. I can help you find your way back/
  )
  expect(notFoundText).toBeInTheDocument()
})
