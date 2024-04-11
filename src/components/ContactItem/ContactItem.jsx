import { Component } from 'react';
import './ContactItem.css';

export class ContactItem extends Component {
  onContactSelect = (event) => {
    // event.stopPropagation();
    console.dir(event.target);
    this.props.onSelect(event.target)

  };

  onContactDelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.contact.id);
  };
  render() {

    const { fName, lName } = this.props.contact;

    const initials =
      fName.trim().slice(0, 1).toUpperCase() +
      lName.trim().slice(0, 1).toUpperCase();

    const changeColor = this.props.toChangeColor;

    return (
      <div className="itemDiv" onDoubleClick={this.onContactSelect}>
        <span style={changeColor()} className="initialSpan">
          {initials}
        </span>
        <p id="contactName">{fName + ' ' + lName}</p>
        <span className="spanX" onClick={this.onContactDelete}>
          x
        </span>
      </div>
    );
  }
}

export default ContactItem;
