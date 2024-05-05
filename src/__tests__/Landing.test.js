import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Landing from "../pages/Landing"
import Modals from "../components/modal/Modal"
import AboutUsModal from "../components/modal/AboutUsModal"

jest.mock("../components/modal/Modal", () => (props) => (
  <div>Modal - {props.title}</div>
))
jest.mock("../components/modal/AboutUsModal", () => () => (
  <div>About Us Modal</div>
))

test("renders Landing component", () => {
  render(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  )

  expect(screen.getByText(/Create Account/)).toBeInTheDocument()
  expect(screen.getByText(/Log In/)).toBeInTheDocument()
  expect(screen.getByText(/About Us/)).toBeInTheDocument()
  expect(screen.getByText("Modal - Create Account")).toBeInTheDocument()
  expect(screen.getByText("Modal - Log In")).toBeInTheDocument()
  expect(screen.getByText("About Us Modal")).toBeInTheDocument()
})
