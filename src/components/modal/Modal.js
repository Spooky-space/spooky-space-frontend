import React, { useState } from "react"
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap"
import closeimage from "../modal/closeimage.png"

const Modals = ({ title, body, trigger, onAction, onCancel }) => {
	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)

	// const modalClick = () => {
	// 	onCancel()
	// 	toggle()
	// }

	return (
		<div>
			<Button className="button" onClick={toggle}>
				{title}
			</Button>
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
