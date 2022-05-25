import React from "react";
import { Link, useLocation } from "react-router-dom";
import userImage from "../images/user.png";

export default function ContactDetail(props) {
  const { state } = useLocation();

  const contact = state.contact;
  return (
    <div className="card  mt-5 mx-auto" style={{ width: "50vh" }}>
      <img src={userImage} alt="user" />
      <div className="card-body text-center">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">{contact.email}</p>

        <Link to="/dashboard">
          <button className="btn btn-primary">Back to List</button>
        </Link>
      </div>
    </div>
  );
}
