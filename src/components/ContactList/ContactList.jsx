import { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';

export class ContactList extends Component {
  render() {
    console.log(this.props.contacts);
    return (
      <>
        {this.props.contacts.map((contact) => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              toChangeColor={this.props.toChangeColor}
            />
          );
        })}
      </>
    );
  }
}

export default ContactList;
