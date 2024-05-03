import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import closeimage from "../modal/closeimage.png"

const Modals = ({ title, body, trigger, onAction, onCancel }) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const modalClick = () => {
    onCancel()
    toggle()
  }

  return (
    <div>
      {React.cloneElement(trigger, { onClick: toggle })}
      <Modal className="modal-content" isOpen={modal} toggle={toggle}>
        <ModalHeader className="modal-header-custom">
          <img
            src={closeimage}
            alt="Close"
            onClick={toggle}
            className="close-icon"
          />
          <h4 className="gradient-text">{title}</h4>
        </ModalHeader>
        <ModalBody>{body}</ModalBody>
      </Modal>
    </div>
  )
}

export default Modals
