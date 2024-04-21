import { useEffect, useState } from 'react';
import './ContactForm.css';

function ContactForm({ currentContact, onDelete, onSubmit }) {
  const [contact, setContact] = useState(currentContact);
  console.log(currentContact);

  function createEmptyContact() {
    return {
      id: null,
      fName: '',
      lName: '',
      email: '',
      telNumber: '',
    };
  }

    useEffect(() => {
      setContact({ ...currentContact });
    }, [currentContact]);

  const onContactDelete = (event) => {
    event.preventDefault();
    onDelete(contact.id);
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setContact( {
      ...contact,
      [name]: value,
    });
  };

  const onClearInput = (event) => {
    const sibling = event.target.previousSibling;
    setContact({
      ...contact,
      [sibling.name]: '',
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(contact);
    if (!contact.id) {
      setContact(createEmptyContact());
    }
  };

  return (
    <form id="contactItemForm" onSubmit={onFormSubmit}>
      <div className="inputDiv">
        <input
          type="text"
          name="fName"
          placeholder="First name"
          value={contact.fName}
          onChange={onInputChange}
        />
        <span className="clearInput" onClick={onClearInput}>
          x
        </span>
      </div>
      <div className="inputDiv">
        <input
          type="text"
          name="lName"
          placeholder="Last name"
          value={contact.lName}
          onChange={onInputChange}
        />
        <span className="clearInput" onClick={onClearInput}>
          x
        </span>
      </div>

      <div className="inputDiv">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={onInputChange}
        />
        <span className="clearInput" onClick={onClearInput}>
          x
        </span>
      </div>
      <div className="inputDiv">
        <input
          type="tel"
          placeholder="Phone number"
          name="telNumber"
          value={contact.telNumber}
          onChange={onInputChange}
        />
        <span className="clearInput" onClick={onClearInput}>
          x
        </span>
      </div>
      <div className="formButtons">
        <button type="submit">Save</button>
        {!currentContact.id ? (
          <></>
        ) : (
          <button onClick={onContactDelete}>Delete</button>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
