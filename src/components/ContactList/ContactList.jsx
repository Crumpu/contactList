import { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';

export class ContactList extends Component {
  render() {
    return (
      <div className="contactList">
        <div className="listItems">
          {this.props.contacts.map((contact) => {
            return (
              <ContactItem
                key={contact.id}
                contact={contact}
                toChangeColor={this.props.toChangeColor}
                onDelete={this.props.onDelete}
                onSelect={this.props.onSelect}
                bgColor={this.props.bgColor}
              />
            );
          })}
        </div>
        <button onClick={this.props.addNewContact} className="buttonNew">
          New
        </button>
      </div>
    );
  }
}

export default ContactList;
