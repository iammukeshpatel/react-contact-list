import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";

const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  console.log(auth.user);

  const handleLogout = () => {
    console.log(auth.user);
    auth.logout();
    navigate("/login");
  };

  return (
    <React.Fragment>
      {/*
        // print object 
        <pre>{JSON.stringify(auth, null, 2)}</pre> 
      */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <h2>
            <i className="fa-solid fa-blender-phone"></i> Contact Manager
          </h2>

          <div id="navbarNav">
            <ul className="nav">
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li> */}

              {/* <ProtectedRoute> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    {auth.isLoggedIn ? auth.user.username : "Guest"}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/lifecycle">
                    LifeCycle
                  </Link>
                </li>
              {/* </ProtectedRoute> */}

              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>

              {auth.isLoggedIn ? (
                <li className="nav-item">
                  <button className="btn btn-link" onClick={handleLogout}>
                    {" "}
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
