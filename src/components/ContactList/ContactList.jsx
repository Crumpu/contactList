import { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';

export class ContactList extends Component {
  render() {
    return (
      <>
        {this.props.contacts.map((contact) => {
  
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              toChangeColor={this.props.toChangeColor}
              onDelete={this.props.onDelete}
              onSelect={this.props.onSelect}
            />
          );
        })} 
      </>
    );
  }
}

export default ContactList;
