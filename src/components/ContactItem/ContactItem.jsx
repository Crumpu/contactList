import { Component } from 'react';
import './ContactItem.css';

export class ContactItem extends Component {
  render() {
    const { id, fName, lName, email, telNumber } = this.props.contact;
    const initials =
      fName.slice(0, 1).toUpperCase() + lName.slice(0, 1).toUpperCase();
    const changeColor = this.props.toChangeColor;
    return (
      <div>
        <p>
          <span style={changeColor()} className="initialSpan">
            {initials}
          </span>
          {fName + ' ' + lName}
        </p>
        <span>X</span>
      </div>
    );
  }
}

export default ContactItem;
