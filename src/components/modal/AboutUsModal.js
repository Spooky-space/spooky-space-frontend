import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import closeimage from "../modal/closeimage.png"

const AboutUsModal = ({ trigger }) => {
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
      content:
        "Matt is the lead developer with extensive experience in full stack development...",
    },
    seth: {
      title: "Seth Crist",
      content:
        "Seth specializes in backend technologies and cloud infrastructure...",
    },
    mark: {
      title: "Mark Smith",
      content:
        "Mark is a frontend wizard, focusing on UX/UI and interactive designs...",
    },
    amir: {
      title: "Amir Jackson",
      content:
        "Amir is our database expert with years of experience in SQL and NoSQL databases...",
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
        <Button className="submit-button" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )

  return (
    <div>
      {React.cloneElement(trigger, { onClick: toggle })}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>
          {" "}
          <h4 className="gradient-text">About Us</h4>
        </ModalHeader>
        <ModalBody>
          <p style={{ textShadow: "2px 2px 4px #FF0000", fontSize: "3vh" }}>
            General information about the company...
          </p>
          <Button
            className="submit-button"
            onClick={() => toggleNested("matt")}
          >
            About Matt
          </Button>
          <Button
            className="submit-button"
            onClick={() => toggleNested("seth")}
          >
            About Seth
          </Button>
          <Button
            className="submit-button"
            onClick={() => toggleNested("mark")}
          >
            About Mark
          </Button>
          <Button
            className="submit-button"
            onClick={() => toggleNested("amir")}
          >
            About Amir
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
        <ModalFooter>
          <img
            src={closeimage}
            alt="Close"
            onClick={toggle}
            style={{ cursor: "pointer", width: "30px", height: "30px" }} //
          />
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AboutUsModal
