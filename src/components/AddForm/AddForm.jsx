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
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      telNumber: this.state.telNumber,
    });
  };

    render() {
    return (
        <form id="contactItemForm"
        onSubmit={this.onFormSubmit}
        >
            
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
        <button >Save</button>
        <button type="reset">New</button>
      </form>
    );
  }
}

export default AddForm;
