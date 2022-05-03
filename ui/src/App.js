import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";

import contactApi from "./api/contacts";
import EditContact from "./components/EditContact";

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const retrivedContacts = async () => {
    const response = await contactApi.get("contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = { id: uuidv4(), ...contact };

    const response = await contactApi.post("/contacts", request);

    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    console.log(contact);
    const response = await contactApi.put(`contacts/${contact.id}`, contact);
    const updatedContact = response.data;

    setContacts(
      contacts.map((contact) => {
        return contact.id === updatedContact.id
          ? { ...updatedContact }
          : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await contactApi.delete(`contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const searchHandler = (searchTerm) => {
    console.log(searchTerm);
    setSearchTerm(searchTerm);

    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLocaleLowerCase()
          .includes(searchTerm);
      });

      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  };

  useEffect(() => {
    // const retrivedContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );

    // if (retrivedContacts && retrivedContacts.length) {
    //   setContacts([...retrivedContacts]);
    // }

    const getAllContacts = async () => {
      const allContacts = await retrivedContacts();

      if (allContacts) {
        setContacts(allContacts);
      }
    };

    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <Header />
                  <ContactList
                    contacts={searchTerm.length < 1 ? contacts : searchResult}
                    getConatactId={removeContactHandler}
                    term={searchTerm}
                    searchKeyword={searchHandler}
                  />
                </React.Fragment>
              }
            />
            <Route
              path="/add"
              element={<AddContact addContactHandler={addContactHandler} />}
            />

            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route
              path="/contact/edit/:id"
              element={
                <EditContact updateContactHandler={updateContactHandler} />
              }
            />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
