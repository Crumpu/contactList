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

  // ============function selectContact========================

  selectContact = (contact) => {
    this.setState({ currentContact: contact });
  };

  // ============function saveContact===========================

  saveContact = (contact) => {
    if (contact.id) {
      this.updateContact(contact);
    } else {
      this.createContact(contact);
    }
  };

  // ============function updateContact=========================

  updateContact(contact) {
    console.log('update')
    this.setState((state) => {
      const contacts = state.contacts.map((item) => {
        item.id === contact.id ? item : contact});
      this.saveToLocalStorage(contacts);
      return {
        contacts,
        currentContact: contact,
      };
    });
  }

  // ============function createContact=======================

  createContact = (contact) => {
    console.log('create')
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

  // --------------unction change bg color------------------------------

  changeColor = () => {
    const color = Math.floor(Math.random() * 255);
    return color;
  };

  bgColor = () => {
    return {
      backgroundColor: `rgb(${this.changeColor()}, ${this.changeColor()}, ${this.changeColor()})`,
    };
  };
  // --------------------------------------------------------------------
  render() {
    return (
      <div className="appDiv">
        <div id="h1Div">
          <h1>Contact List</h1>
        </div>
        <div className="contactForm">
          <ContactForm
            onSubmit={this.saveContact}
            currentContact={this.state.currentContact}
            onDelete={this.deleteContact}
          />
        </div>
        <div className="contactList">
          <ContactList
            contacts={this.state.contacts}
            currentContact={this.state.currentContact}
            toChangeColor={this.bgColor}
            onDelete={this.deleteContact}
            onSelect={this.selectContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
