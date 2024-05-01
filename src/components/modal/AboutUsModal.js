import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

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
      <ModalHeader toggle={toggle}>{teamDetails[member].title}</ModalHeader>
      <ModalBody>{teamDetails[member].content}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )

  return (
    <div>
      {React.cloneElement(trigger, { onClick: toggle })}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>About Us</ModalHeader>
        <ModalBody>
          <div>General information about the company...</div>
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
          {/* Nested Modals for each team member */}
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
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AboutUsModal
