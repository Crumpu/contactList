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
    const { fName, lName } = this.props.contact;
    // ===================decoration===================
    const bgColor = this.props.bgColor;
    const initials =
      fName.trim().slice(0, 1).toUpperCase() +
      lName.trim().slice(0, 1).toUpperCase();
    // ================================================
    return (
      <div className="itemDiv" onDoubleClick={this.onContactSelect}>
        {/* decoration */}
        <span className="initialSpan" style={bgColor()}>
          {initials}
        </span>
        {/* decoration */}
        <p id="contactName">{fName + ' ' + lName}</p>
        <span className="spanX" onClick={this.onContactDelete}>
          x
        </span>
      </div>
    );
  }
}

export default ContactItem;
