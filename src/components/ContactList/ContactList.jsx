import ContactItem from '../ContactItem/ContactItem';
import { getContacts } from '../../store/actions/contactsActions';
import { connect } from 'react-redux';
import api from '../../api/contact-service';
import { useEffect } from 'react';

function ContactList({ contacts }) {
  console.log(contacts);

  useEffect(() => {
    api.get('/').then(({ data }) => getContacts(data));
  }, []);

  return (
    <div className="contactList">
      <div className="listItems">
        {contacts.map((contact) => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </div>
      <button className="buttonNew">New</button>
    </div>
  );
}

const mapStateToProps = ({ contacts }) => ({ contacts });
const mapDispatchToProps = {
  getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
