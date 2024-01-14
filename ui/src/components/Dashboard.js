import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
import Header from "./Header";

import contactApi from "./../api/contacts";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const retrivedContacts = async () => {
    const response = await contactApi.get("contacts");
    return response.data;
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
          .includes(searchTerm.toLocaleLowerCase());
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
      <ContactList
        contacts={searchTerm.length < 1 ? contacts : searchResult}
        getConatactId={removeContactHandler}
        term={searchTerm}
        searchKeyword={searchHandler}
      />
    </React.Fragment>
  );
}
