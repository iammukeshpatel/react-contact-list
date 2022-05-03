import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DeleteConfirmationModal(props) {
  const contact = props.contact;

  return (
    <React.Fragment>
      <Modal
        show={props.show}
        dialogClassName="modal-90w"
        backdrop="static"
        keyboard={true}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Delete Contact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you want to delete contant "{contact.name}"</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={props.confirmDelete}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
