import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

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
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  )
}

export default Modals
