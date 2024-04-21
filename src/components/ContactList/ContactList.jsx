import ContactItem from '../ContactItem/ContactItem';

function ContactList({ contacts, addNewContact, onDelete, onSelect, bgColor }) {
  return (
    <div className="contactList">
      <div className="listItems">
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

export default ContactList;
