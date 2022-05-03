import React, { Component } from "react";
import { Link } from "react-router-dom";
import withRouter from "./withRoute";

export class EditContact extends Component {
  constructor(props) {
    super(props);

    const { id, name, email } = props.location.state.contact;

    this.state = {
      id,
      name,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Allt the fields are mandatory");
      return;
    }

    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.navigate("/");
  };

  render() {
    return (
      <React.Fragment>
        <div className="card mt-5">
          <div className="card-header">
            <h2>Edit Contact</h2>

            <div className="card-body">
              <form className="ui form" onSubmit={this.update}>
                <div className="mb-3 row">
                  <label htmlFor="name" className="col-sm-2 col-form-label">
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                    />
                  </div>
                </div>
                {/* end of form row */}

                <div className="mb-3 row">
                  <label htmlFor="email" className="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                  </div>
                </div>
                {/* end of form row */}

                <div className="mb-3 row">
                  <div className="col offset-2">
                    <button className="btn btn-primary me-2">Update</button>

                    <Link to="/">
                      <button className="btn btn-primary">Back to List</button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(EditContact);
