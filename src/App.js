import React from "react"
import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Home from "./pages/Home.js"
import Show from "./pages/Show"
import MyFlix from "./pages/MyFlix"
import Index from "./pages/Index"
import "./App.css"

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/show/:id" element={<Show />} />
      </Routes>
    </>
  )
}

export default App
