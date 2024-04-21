import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContacts] = useState(createEmptyContact());

  // ====================function createEmptyContact==============

  function createEmptyContact() {
    return {
      id: null,
      fName: '',
      lName: '',
      email: '',
      telNumber: '',
      color: '',
    };
  }

  // ================get from storage================================

  useEffect(getFromStorage, []);

  function getFromStorage() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!contacts) {
      setContacts([]);
    } else {
      setContacts(contacts);
    }
  }

  // ==============function addNewContact========================

  const addNewContact = () => {
    setCurrentContacts(createEmptyContact());
  };

  // ============function selectContact========================

  const selectContact = (contact) => setCurrentContacts(contact);

  // ============function saveContact===========================

  const saveContact = (contact) => {
    if (contact.id) {
      updateContact(contact);
    } else {
      createContact(contact);
    }
  };

  // ============function updateContact=========================

  function updateContact(contact) {
    const updateContacts = contacts.map((item) =>
      item.id === contact.id ? contact : item
    );
    saveToLocalStorage(updateContacts);
    setContacts(updateContacts);
    setCurrentContacts(contact);
  }

  // ============function createContact=======================

  const createContact = (contact) => {
    contact.id = nanoid();
    contact.color = bgColor(contact);
    const newContact = [...contacts, contact];
    saveToLocalStorage(newContact);
    setContacts(newContact);
    setCurrentContacts(createEmptyContact());
  };

  // ============function deleteContact=======================

  const deleteContact = (id) => {
    const newContact = contacts.filter((contact) => contact.id !== id);
    saveToLocalStorage(newContact);
    setContacts(newContact);
    setCurrentContacts(createEmptyContact());
  };

  // ============function saveToLocalStorage=======================

  const saveToLocalStorage = (arrContacts) => {
    localStorage.setItem('contacts', JSON.stringify(arrContacts));
  };

  // ===========decoration========================================
  const randomColor = () => {
    const min = 0;
    const max = 225;
    const color = Math.floor(Math.random() * (max - min) + min);
    return color;
  };

  const bgColor = (contact) => {
    return (contact.color = {
      backgroundColor: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
    });
  };
  // -------------------------------------------------------------

  return (
    <>
      <div id="h1Div">
        <h1>Contact List</h1>
      </div>
      <div className="appDiv">
        <ContactList
          key={currentContact.id}
          contacts={contacts}
          addNewContact={addNewContact}
          onDelete={deleteContact}
          onSelect={selectContact}
        />
        <ContactForm
          onSubmit={saveContact}
          currentContact={currentContact}
          onDelete={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
