import { Component } from 'react';
import './ContactForm.css';

export class AddForm extends Component {
  state = {
    fName: '',
    lName: '',
    email: '',
    telNumber: '',
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
      fName: this.state.fName,
      lName: this.state.lName,
      telNumber: this.state.telNumber,
      email: this.state.email,
    });
    this.setState({
      fName: '',
      lName: '',
      email: '',
      telNumber: '',
    });
  };

  render() {
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
        {}
      </form>
    );
  }
}

export default AddForm;
