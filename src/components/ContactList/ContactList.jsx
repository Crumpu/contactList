import ContactItem from '../ContactItem/ContactItem';
import ScaleLoader from 'react-spinners/ScaleLoader';
import PropTypes from 'prop-types';

function ContactList({ contacts, addNewContact, onDelete, onSelect }) {
  return (
    <div className="contactList">
      <div className="listItems">
        {contacts.length === 0 && (
          <div className="spinner">
            <ScaleLoader color="blue" />
          </div>
        )}
        {contacts.map((contact) => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
              onSelect={onSelect}
            />
          );
        })}
      </div>
      <button onClick={addNewContact} className="buttonNew">
        New
      </button>
    </div>
  );
}

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  addNewContact: PropTypes.func,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
};

export default ContactList;
