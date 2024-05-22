import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// ====================================================
import ContactItem from '../ContactItem/ContactItem';
import {
  getContactsAction,
  addContactAction,
} from '../../store/actions/contactsActions';

function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsAction());
  }, [dispatch]);

  const addNewContact = () => {
    dispatch(addContactAction());
  };

  return (
    <div className="contactList">
      <div className="listItems">
        {contacts.map((contact) => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </div>
      <button className="buttonNew" onClick={addNewContact}>
        New
      </button>
    </div>
  );
}

export default ContactList;
