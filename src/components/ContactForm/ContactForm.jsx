import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// ===================================================
import {
  createContact,
  delContact,
  updateContact,
} from '../../store/slices/contactSlice';
// ===================================================
import './ContactForm.css';

function ContactForm() {
  const dispatch = useDispatch();

  let currentContact = useSelector((state) => state.contactList.currentContact);
  const [contact, setContact] = useState(currentContact);

  useEffect(() => {
    setContact(currentContact);
  }, [currentContact]);

  // -------------function for delete contact-----------------

  const onContactDelete = (event) => {
    event.preventDefault();
    dispatch(delContact(contact.id));
  };

  // -----------------Control inputs--------------------------

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  // -------------------clearInput-----------------------------

  const onClearInput = (event) => {
    const sibling = event.target.previousSibling;
    setContact({
      ...contact,
      [sibling.name]: '',
    });
  };

  // --------Function for create and update contact------------

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (contact.id) {
      dispatch(updateContact(contact));
    } else {
      contact.color = bgColor();
      dispatch(createContact(contact));
    }
  };
  // -----------------decoration----------------------------------
  const randomColor = () => {
    const min = 0;
    const max = 225;
    const color = Math.floor(Math.random() * (max - min) + min);
    return color;
  };

  const bgColor = () =>
    `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

  // --------------------------------------------------------------
  return (
    <form id="contactItemForm" onSubmit={onFormSubmit}>
      <div>
        <div className="inputDiv">
          <input
            type="text"
            name="fName"
            placeholder="First name"
            value={contact.fName}
            onChange={onInputChange}
          />
          <span className="clearInput" onClick={onClearInput}>
            &#10006;
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
            &#10006;
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
            &#10006;
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
            &#10006;
          </span>
        </div>
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
