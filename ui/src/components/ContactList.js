import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

function ContactList(props) {
  const inputElement = useRef("");
  const [show, setShow] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const showDeleteModalHandler = (contact) => {
    setSelectedContact(contact);
    setShow(true);
    // props.getConatactId(contact.id);
  };

  const deleteContactHandler = () => {
    props.getConatactId(selectedContact.id);
    setShow(false);
  };

  const closeDeleteModal = () => {
    setShow(false);
  };

  const getSearchTerm = () => {
    props.searchKeyword(inputElement.current.value);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        showDeleteModal={showDeleteModalHandler}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="container-flud  my-3">
        <h2>
          Contact List
          <Link to="/add">
            <button className="btn btn-primary float-end">Add</button>
          </Link>
        </h2>
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                ref={inputElement}
                type="text"
                placeholder="Search Contacts"
                className="form-control"
                value={props.term}
                onChange={getSearchTerm}
              />
            </div>
          </div>
        </div>

        <div className="list-group">
          {renderContactList.length > 0
            ? renderContactList
            : "No Contacts available"}
        </div>
      </div>

      {selectedContact ? (
        <DeleteConfirmationModal
          contact={selectedContact}
          confirmDelete={deleteContactHandler}
          close={closeDeleteModal}
          show={show}
        />
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default ContactList;
