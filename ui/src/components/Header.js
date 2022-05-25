import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <h2>
            <i className="fa-solid fa-blender-phone"></i> Contact Manager
          </h2>

          <div id="navbarNav">
            <ul className="nav">
              {/* <li className="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li> */}

              <li className="nav-item">
                <Link class="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="/lifecycle">
                  LifeCycle
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
