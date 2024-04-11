import { Component } from 'react';
import './AddForm.css';

export class AddForm extends Component {
  state = {
    fName: '',
    lName: '',
    email: '',
    telNumber: '',
  };

  onInputChange = (event) => {
    const { name, value } = event.target; // Деструктурируем name и value из event.target
    console.log(name);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form id="contactItemForm">
        <input
          type="text"
          name="fName"
          placeholder="First name"
          value={this.state.fName}
          onChange={this.onInputChange}
        />
        <input
          type="text"
          name="lName"
          placeholder="Last name"
          value={this.state.lName}
          onChange={this.onInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onInputChange}
        />
        <input
          type="tel"
          placeholder="tel"
          name="telNumber"
          value={this.state.telNumber}
          onChange={this.onInputChange}
        />
        <button type="reset">New</button>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default AddForm;
