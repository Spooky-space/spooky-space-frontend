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
        <ModalHeader>
          <img
            src={closeimage}
            alt="Close"
            onClick={toggle}
            style={{ cursor: "pointer", width: "30px", height: "30px" }}
          />
          <h4 className="gradient-text">{title}</h4>
        </ModalHeader>
        <ModalBody>{body}</ModalBody>
        {/* <br></br>
        <ModalFooter>
          <img
            src={closeimage}
            alt="Close"
            onClick={toggle}
            style={{ cursor: "pointer", width: "30px", height: "30px" }}
          />
        </ModalFooter> */}
      </Modal>
    </div>
  )
}

export default Modals
