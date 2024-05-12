import React, { useState } from "react"
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap"
import closeimage from "../modal/closeimage.png"

const Modals = ({ title, body, trigger, onAction, onCancel }) => {
	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)

	return (
		<div>
			<div className="landing-buttons">
				<Button className="modal-nav-button nav-button" onClick={toggle}>
					{title}
				</Button>
			</div>
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
