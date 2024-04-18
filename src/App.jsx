import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import './App.css';

export class App extends Component {
  state = {
    contacts: [],
    currentContact: this.createEmptyContact(),
  };

  // ====================function createEmptyContact==============

  createEmptyContact() {
    return {
      id: null,
      fName: '',
      lName: '',
      email: '',
      telNumber: '',
    };
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!contacts) {
      this.setState({
        contacts: [],
      });
    } else {
      this.setState({
        contacts: [...contacts],
      });
    }
  }

  // ==============function addNewContact========================

  addNewContact = () => {
    this.setState({
      currentContact: this.createEmptyContact(),
    });
    console.log('cleaning');
  };

  // ============function selectContact========================

  selectContact = (contact) => {
    this.setState({ currentContact: contact });
  };

  // ============function saveContact===========================

  saveContact = (contact) => {
    console.log(contact);
    if (contact.id) {
      this.updateContact(contact);
    } else {
      this.createContact(contact);
    }
  };

  // ============function updateContact=========================

  updateContact(contact) {
    console.log('update');
    this.setState((state) => {
      const contacts = state.contacts.map((item) =>
        item.id === contact.id ? contact : item
      );
      this.saveToLocalStorage(contacts);
      return {
        contacts: contacts,
        currentContact: contact,
      };
    });
  }

  // ============function createContact=======================

  createContact = (contact) => {
    console.log('create');
    contact.id = nanoid();
    const contacts = [...this.state.contacts, contact];
    this.saveToLocalStorage(contacts);
    this.setState({
      contacts: contacts,
      currentContact: this.createEmptyContact(),
    });
  };

  // ============function deleteContact=======================

  deleteContact = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.filter((contact) => contact.id !== id);
      this.saveToLocalStorage(contacts);
      return {
        contacts,
        currentContact: this.createEmptyContact(),
      };
    });
  };

  // ============function saveToLocalStorage=======================

  saveToLocalStorage = (arrContacts) => {
    localStorage.setItem('contacts', JSON.stringify(arrContacts));
  };

  // ===========decoration========================================
  // -------------------------------------------------------------
  randomColor = () => {
    const min = 0;
    const max = 225;
    const color = Math.floor(Math.random() * (max - min) + min);
    return color;
  };

  bgColor = () => {
    return {
      backgroundColor: `rgb(${this.randomColor()}, ${this.randomColor()}, ${this.randomColor()})`,
    };
  };

  render() {
    return (
      <>
        <div id="h1Div">
          <h1>Contact List</h1>
        </div>
        <div className="appDiv">
          <ContactList
            contacts={this.state.contacts}
            addNewContact={this.addNewContact}
            onDelete={this.deleteContact}
            onSelect={this.selectContact}
            bgColor={this.bgColor}
          />
          <ContactForm
            onSubmit={this.saveContact}
            currentContact={this.state.currentContact}
            onDelete={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
