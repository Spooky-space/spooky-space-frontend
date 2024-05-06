import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"
import headerLogo from "../assets/header-logo.png"

test("renders the Header component", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const logo = screen.getByAltText("Logo")
  expect(logo).toBeInTheDocument()
  expect(logo).toHaveAttribute("src", headerLogo)

  const myMoviesButton = screen.getByRole("link", { name: "My Movies" })
  expect(myMoviesButton).toBeInTheDocument()

  const logoutButton = screen.getByRole("link", { name: "LogOut" })
  expect(logoutButton).toBeInTheDocument()
})
