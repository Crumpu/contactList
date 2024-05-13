import ContactItem from '../ContactItem/ContactItem';
import { getContacts, addContact } from '../../store/actions/contactsActions';
import api from '../../api/contact-service';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('/').then(({ data }) => dispatch(getContacts(data)));
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
