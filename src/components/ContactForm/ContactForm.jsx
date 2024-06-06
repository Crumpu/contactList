import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// ===================================================
import {
  createContact,
  delContact,
  updateContact,
} from '../../store/slices/contactSlice';
import { emptyContact } from '../../constants/constants';
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

  // -------------------clearInput-----------------------------

  const onClearInput = (event) => {
    const sibling = event.target.previousSibling;
    setContact({
      ...contact,
      [sibling.name]: '',
    });
  };

  // --------Function for create and update contact------------

  const onFormSubmit = (values) => {
    if (values.id) {
      dispatch(updateContact(values));
    } else {
      contact.color = bgColor();
      dispatch(createContact(values));
    }
  };

  // -------------------regExp------------------------------------

  // const regExpCountryCode = /^\+380$/;
  // const regExpOperatorCode =
  //   /^\+380(66|50|99|95|67|68|97|96|98|93|73|63){5,6}$/;
  const regExpPhone = /^\+380(66|50|99|95|67|68|97|96|98|93|73|63)\d{7}$/;

  // -------------------schema------------------------------------

  const schema = Yup.object().shape({
    email: Yup.string().required('Email is required field'),
    telNumber: Yup.string().required('Phone is required field').matches(
      regExpPhone /* , {
        message: (value) => {
          if (!value.match(regExpCountryCode)) {
            return 'The country code is either missing or entered incorrectly, the number must begin with "+380"';
          }
          if (!value.match(regExpOperatorCode)) {
            return 'Invalid operator code';
          }
          if (!value.match(regExpPhone)) {
            return 'The number entered is incorrect';
          }
          if (value.match(regExpPhone)) {
            return true;
          }
        },
      } */
    ),
  });

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

  const renderForm = () => {
    return (
      <Form id="contactItemForm">
        <div>
          <div className="inputDiv">
            <Field type="text" name="fName" placeholder="First name" />
            <span className="clearInput" onClick={onClearInput}>
              &#10006;
            </span>
          </div>
          <div className="inputDiv">
            <Field type="text" name="lName" placeholder="Last name" />
            <span className="clearInput" onClick={onClearInput}>
              &#10006;
            </span>
          </div>

          <div className="inputDiv">
            <Field type="email" name="contact.email" placeholder="Email" />
            <span className="clearInput" onClick={onClearInput}>
              &#10006;
            </span>
          </div>
          <div className="inputDiv">
            <Field type="tel" placeholder="Phone number" name="telNumber" />
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
            <button type="button" onClick={onContactDelete}>
              Delete
            </button>
          )}
        </div>
      </Form>
    );
  };

  return (
    <Formik
      initialValues={currentContact ? currentContact : emptyContact}
      onSubmit={onFormSubmit}
      validationSchema={schema}
    >
      {renderForm}
    </Formik>
  );
}

export default ContactForm;
