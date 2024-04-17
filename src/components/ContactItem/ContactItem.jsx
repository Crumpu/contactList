import { Component } from 'react';
import './ContactItem.css';

export class ContactItem extends Component {
  onContactSelect = () => {
    const { contact } = this.props;
    this.props.onSelect(contact);
  };

  onContactDelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.contact.id);
  };
  render() {
    // console.log(this.props)
    const { fName, lName } = this.props.contact;

    return (
      <div className="itemDiv" onDoubleClick={this.onContactSelect}>
        <p id="contactName">{fName + ' ' + lName}</p>
        <span className="spanX" onClick={this.onContactDelete}>
          x
        </span>
      </div>
    );
  }
}

export default ContactItem;
