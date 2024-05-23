import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// ====================================================
import ContactItem from '../ContactItem/ContactItem';
import { getContacts, addContact } from '../../store/slices/contactSlice';

function ContactList() {
  const contacts = useSelector((state) => state.contactList.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const addNewContact = () => {
    dispatch(addContact());
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
