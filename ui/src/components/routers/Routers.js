import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactDetail from '../ContactDetail'
import EditContact from '../EditContact'
import LifeCycle from '../lifecycle/LifeCycle'
import AddContact from '../AddContact'
import Dashboard from '../Dashboard'
import Signup from '../Signup'
import Login from '../Login'

export const Routers = () => {
  return (
    <React.Fragment>
        <div className="container-fluid">
            <Routes>
              <Route
                path="/"
                element={
                  <React.Fragment>
                    {/* <Layout /> */}
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
        </div>
    </React.Fragment>
  )
}

export default Routers;