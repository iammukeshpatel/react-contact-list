import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactDetail from "./components/ContactDetail";
import Dashboard from "./components/Dashboard";
import EditContact from "./components/EditContact";
import Layout from "./components/Layout";
import LifeCycle from "./components/lifecycle/LifeCycle";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <Layout />
                </React.Fragment>
              }
            />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/add" element={<AddContact />} />

            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route path="/contact/edit/:id" element={<EditContact />} />

            <Route path="lifecycle" element={<LifeCycle />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
