import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import './App.css';

export class App extends Component {
  state = {
    contacts: [],
    currentContact: {
      fName: '',
      lName: '',
      telNumber: '',
      email: '',
    },
  };

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

  // ============function createContact=======================

  createContact = (contact) => {
    contact.id = nanoid();
    this.setState((state) => {
      const contacts = [...state.contacts, contact];
      this.saveContacts(contacts);
      return {
        contacts,
      };
    });
  };

  // ============function deleteContact=======================

  deleteContact = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.filter((contact) => contact.id !== id);
      this.saveContacts(contacts);
      return {
        contacts,
      };
    });
  };

  // ============function saveContact=======================

  saveContacts = (arrContacts) => {
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
        <div className="addEditForm">
          <ContactForm
            onSubmit={this.createContact}
            onSelect={this.selectContact}
          />
        </div>
        <div className="contactList">
          <ContactList
            contacts={this.state.contacts}
            toChangeColor={this.bgColor}
            onDelete={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
