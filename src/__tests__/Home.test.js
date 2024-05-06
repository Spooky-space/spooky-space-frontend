import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import HorrorMovies from "../components/HorrorMovies"

jest.mock("../components/HorrorMovies", () => () => (
  <div>HorrorMovies Component</div>
))
test("renders Home component", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  const homeHeaderText = screen.getByText(/Spooky Space Top Picks/)
  expect(homeHeaderText).toBeInTheDocument()

  const bannerImage = screen.getByAltText(
    /red banner with ghost face with text reading whats your favorite movie/
  )
  expect(bannerImage).toBeInTheDocument()

  const horrorMoviesComponent = screen.getByText("HorrorMovies Component")
  expect(horrorMoviesComponent).toBeInTheDocument()
})
