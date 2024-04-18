import { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {
  state = {
    ...this.props.currentContact,
  };

  createEmptyContact() {
    return {
      id: null,
      fName: '',
      lName: '',
      email: '',
      telNumber: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.currentContact.id !== state.id) {
      return {
        ...props.currentContact,
      };
    }
    return {};
  }

  onContactDelete = (event) => {
    event.preventDefault();
    this.props.onDelete(this.props.currentContact.id);
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onClearInput = (event) => {
    const sibling = event.target.previousSibling;
    this.setState({
      [sibling.name]: '',
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
   ...this.state,
    });
    if (!this.state.id) {
      this.setState({
        ...this.createEmptyContact(),
      });
    }
  };

  render() {
    console.log(this.state); 
    console.log(this.props.currentContact);
    return (
      <form id="contactItemForm" onSubmit={this.onFormSubmit}>
        <div className="inputDiv">
          <input
            type="text"
            name="fName"
            placeholder="First name"
            value={this.state.fName}
            onChange={this.onInputChange}
          />
          <span className="clearInput" onClick={this.onClearInput}>
            x
          </span>
        </div>
        <div className="inputDiv">
          <input
            type="text"
            name="lName"
            placeholder="Last name"
            value={this.state.lName}
            onChange={this.onInputChange}
          />
          <span className="clearInput" onClick={this.onClearInput}>
            x
          </span>
        </div>

        <div className="inputDiv">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onInputChange}
          />
          <span className="clearInput" onClick={this.onClearInput}>
            x
          </span>
        </div>
        <div className="inputDiv">
          <input
            type="tel"
            placeholder="Phone number"
            name="telNumber"
            value={this.state.telNumber}
            onChange={this.onInputChange}
          />
          <span className="clearInput" onClick={this.onClearInput}>
            x
          </span>
        </div>
        <button type="submit">Save</button>
        {!this.props.currentContact.id ? (
          <></>
        ) : (
          <button onClick={this.onContactDelete}>Delete</button>
        )}
      </form>
    );
  }
}

export default ContactForm;
