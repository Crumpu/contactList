import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// -----------------------------------------------------------------------------------
import {
  createContact,
  delContact,
  updateContact,
} from "../../store/slices/contactSlice";
import { emptyContact } from "../../constants/constants";
// -----------------------------------------------------------------------------------
import "./ContactForm.css";
// ======================================================================================

function ContactForm() {
  const dispatch = useDispatch();

  let currentContact = useSelector((state) => state.contactList.currentContact);

  // -------------function for delete contact-----------------

  const onContactDelete = () => {
    dispatch(delContact(currentContact.id));
  };

  // --------Function for create and update contact------------

  const onFormSubmit = (values, { resetForm }) => {
    if (values.id) {
      dispatch(updateContact(values));
    } else {
      values.color = bgColor();
      dispatch(createContact(values));
      resetForm();
    }
  };

  // -------------------regExp------------------------------------

  const regExpPhone = /^\+380(66|50|99|95|67|68|97|96|98|93|73|63)\d{7}$/;

  // -------------------schema------------------------------------

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required field")
      .email("Entered incorrect email"),
    telNumber: Yup.string()
      .required("Phone is required field")
      .matches(regExpPhone, "Tel number must be in format +380YYXXXXXXX"),
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

  const renderForm = ({ values, isValid, setFieldValue, errors, touched }) => {
    return (
      <Form id="contactItemForm">
        <Box>
          <Box className="inputDiv">
            <Field
              as={TextField}
              label="First name"
              type="text"
              name="fName"
              autocomplete="firstName"
            />
            <span
              className="clearInput"
              onClick={() => setFieldValue("fName", "")}
            >
              &#10006;
            </span>
          </Box>

          <Box className="inputDiv">
            <Field
              as={TextField}
              type="text"
              name="lName"
              label="Last name"
              autocomplete="lastName"
            />
            <span
              className="clearInput"
              onClick={() => setFieldValue("lName", "")}
            >
              &#10006;
            </span>
          </Box>

          <Box className="inputDiv">
            <Field
              as={TextField}
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              error={touched.email && Boolean(errors.email)}
            />
            <span
              className="clearInput"
              onClick={() => setFieldValue("email", "")}
            >
              &#10006;
            </span>
          </Box>
          <ErrorMessage name="email">
            {(msg) => <div className="validationError">{msg}</div>}
          </ErrorMessage>

          <Box className="inputDiv">
            <Field
              as={TextField}
              label="Mobile phone number"
              type="tel"
              placeholder="Mobile phone number"
              name="telNumber"
              error={touched.telNumber && Boolean(errors.telNumber)}
            />
            <span
              className="clearInput"
              onClick={() => setFieldValue("telNumber", "")}
            >
              &#10006;
            </span>
          </Box>
          <ErrorMessage name="telNumber">
            {(msg) => <div className="validationError">{msg}</div>}
          </ErrorMessage>
        </Box>

        <Box className="formButtons">
          <button
            type="submit"
            disabled={!isValid}
            style={{
              cursor: !isValid ? "not-allowed" : "",
              border: !isValid ? "none" : "",
            }}
          >
            Save
          </button>
          {!values.id ? (
            <></>
          ) : (
            <button type="button" onClick={onContactDelete}>
              Delete
            </button>
          )}
        </Box>
      </Form>
    );
  };

  return (
    <Formik
      initialValues={currentContact ? currentContact : emptyContact}
      onSubmit={onFormSubmit}
      validationSchema={schema}
      enableReinitialize
    >
      {renderForm}
    </Formik>
  );
}

export default ContactForm;
