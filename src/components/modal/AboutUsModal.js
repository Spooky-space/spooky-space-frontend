import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import closeimage from "../modal/closeimage.png"
import "./AboutUsModal.css"

const AboutUsModal = ({ trigger, title }) => {
	const [modal, setModal] = useState(false)
	const [nestedModals, setNestedModals] = useState({
		matt: false,
		seth: false,
		mark: false,
		amir: false,
	})

	const toggle = () => setModal(!modal)
	const toggleNested = (member) =>
		setNestedModals((prev) => ({ ...prev, [member]: !prev[member] }))

	const teamDetails = {
		matt: {
			title: "Matt Barnabo",
			content: " Product Manager: linkedin/mattbarnabo github/MattBarnabo ",
		},
		seth: {
			title: "Seth Crist",
			content: "Project Manager: linkedin/seth-crist github/sethcrist ",
		},
		mark: {
			title: "Mark Smith",
			content: "Tech Lead: linkedin/mark-anthony-smith-II github/mark19242",
		},
		amir: {
			title: "Amir Jackson",
			content: "Design Lead: linkedin/amir-jackson github/Rashadjaxon",
		},
	}

	const TeamMemberModal = ({ member, isOpen, toggle }) => (
		<Modal isOpen={isOpen} toggle={toggle}>
			<ModalHeader>
				{" "}
				<h1 style={{ textShadow: "2px 2px 4px #FF0000", fontSize: "24px" }}>
					{teamDetails[member].title}
				</h1>{" "}
			</ModalHeader>
			<br></br>
			<ModalBody>
				<h1 style={{ textShadow: "2px 2px 4px #FF0000", fontSize: "24px" }}>
					{teamDetails[member].content}
				</h1>
			</ModalBody>
			<ModalFooter>
				<Button className="nav-button" onClick={toggle}>
					Close
				</Button>
			</ModalFooter>
		</Modal>
	)

	return (
		<div>
			<div className="landing-buttons">
				<Button
					className="modal-nav-button nav-button header-nav-button"
					onClick={toggle}
				>
					About Us
				</Button>
			</div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader>
					<img
						src={closeimage}
						alt="Close"
						onClick={toggle}
						style={{ cursor: "pointer", width: "30px", height: "30px" }}
						className="close-icon"
					/>{" "}
					<h4 className="gradient-text">About Us</h4>
				</ModalHeader>
				<ModalBody>
					<p style={{ textShadow: "2px 2px 4px #FF0000", fontSize: "3vh" }}>
						Spooky Space: Your gateway to horror film's darkest corners.
					</p>
					<Button className="nav-button" onClick={() => toggleNested("matt")}>
						Matt
					</Button>
					<Button className="nav-button" onClick={() => toggleNested("seth")}>
						Seth
					</Button>
					<Button className="nav-button" onClick={() => toggleNested("mark")}>
						Mark
					</Button>
					<Button className="nav-button" onClick={() => toggleNested("amir")}>
						Amir
					</Button>

					<TeamMemberModal
						member="matt"
						isOpen={nestedModals.matt}
						toggle={() => toggleNested("matt")}
					/>
					<TeamMemberModal
						member="seth"
						isOpen={nestedModals.seth}
						toggle={() => toggleNested("seth")}
					/>
					<TeamMemberModal
						member="mark"
						isOpen={nestedModals.mark}
						toggle={() => toggleNested("mark")}
					/>
					<TeamMemberModal
						member="amir"
						isOpen={nestedModals.amir}
						toggle={() => toggleNested("amir")}
					/>
				</ModalBody>
			</Modal>
		</div>
	)
}

export default AboutUsModal
