import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

// Now accepts a 'trigger' prop to customize the modal's trigger
const Modals = ({ title, body, trigger, onAction, onCancel }) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const modalClick = () => {
    onCancel()
    toggle()
  }

  return (
    <div>
      {/* Use the provided trigger element */}
      {React.cloneElement(trigger, { onClick: toggle })}
      <Modal className="modal-content" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          {/* <Button
            onClick={() => {
              onAction()
              toggle()
            }}
          >
            Do Something
          </Button>{" "} */}
          {/* <Button
            className="submit-button"
            onClick={() => {
              onCancel()
              toggle()
            }}
          >
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Modals
