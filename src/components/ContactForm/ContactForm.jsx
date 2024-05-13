import { useEffect, useState } from 'react';
import {
  createContact,
  delContact,
  updateContact,
} from '../../store/actions/contactsActions';
import api from '../../api/contact-service';
import { useSelector, useDispatch } from 'react-redux';
import './ContactForm.css';

function ContactForm() {
  const dispatch = useDispatch();

  let currentContact = useSelector((state) => state.currentContact);
  const [contact, setContact] = useState(currentContact);

  useEffect(() => {
    setContact(currentContact);
  }, [currentContact]);

// -------------function for delete contact-----------------

  const onContactDelete = (event) => {
    event.preventDefault();
    api
      .delete(`/${contact.id}`)
      .then((statusText) => console.log(statusText))
      .catch((error) => console.log(error));
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
      api
        .put(`/${contact.id}`, contact)
        .then(({ data }) => dispatch(updateContact(data)));
    } else {
      contact.color = bgColor();
      api.post('/', contact).then(({ data }) => dispatch(createContact(data)));
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
      <div className="inputithDiv">
        <div className="inputDiv">
          <input
            type="text"
            name="fName"
            placeholder="First name"
            value={contact.fName}
            onChange={onInputChange}
          />
          <span className="clearInput" onClick={onClearInput}>
            &#10008;
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
            &#10008;
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
            &#10008;
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
            &#10008;
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
