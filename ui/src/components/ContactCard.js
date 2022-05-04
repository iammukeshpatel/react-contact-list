import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userImage from "../images/user.png";

function ContactCard(props) {
  const navigate = useNavigate();
  const contact = props.contact;

  if (contact.name === "Jocker") {
    // throw new Error("Invalid contact name Jocker");
  }

  const listClickHandler = () => {
    navigate(`/contact/${contact.id}`, {
      state: { contact: contact },
    });
  };

  return (
    <React.Fragment>
      <div className="list-group-item list-group-item-action  d-flex justify-content-between align-items-center">
        <img
          className="ui avatar image"
          src={userImage}
          width="50px"
          alt="User"
        ></img>
        <div className="content flex-grow-1 ms-3" onClick={listClickHandler}>
          {/* <Link to={`/contact/${contact.id}`} state={{ contact: contact }}> */}
          <div className="header fw-bold">{contact.name}</div>
          <div>{contact.email}</div>
          {/* </Link> */}
        </div>
        <div className="float-end">
          <button
            className="btn btn-sm btn-danger me-2"
            onClick={() => props.showDeleteModal(contact)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>

          <Link to={`/contact/edit/${contact.id}`} state={{ contact: contact }}>
            <button className="btn btn-sm btn-primary mr-2">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactCard;
