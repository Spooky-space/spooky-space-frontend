import React from "react"
import Modals from "../components/modal/Modal"
import EditList from "../components/modal/EditList"

const MyMovieList = () => {
  const handleAction = () => {
    console.log("Action performed")
  }

  const handleCancel = () => {
    console.log("Cancelled")
  }
  return (
    <div>
      <Modals
        title="My Movie List"
        body={<EditList />}
        onAction={handleAction}
        onCancel={handleCancel}
        trigger={
          <button className="edit-list-button">Edit My Movie List</button>
        }
      />
    </div>
  )
}

export default MyMovieList
