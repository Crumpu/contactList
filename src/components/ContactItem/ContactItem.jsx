import './ContactItem.css';

function ContactItem({ contact, onDelete, onSelect, bgColor }) {
  const onContactSelect = () => {
    onSelect(contact);
  };

  const onContactDelete = (event) => {
    event.stopPropagation();
    onDelete(contact.id);
  };

  // ===================decoration===================

  const initials =
    contact.fName.trim().slice(0, 1).toUpperCase() +
    contact.lName.trim().slice(0, 1).toUpperCase();
  // ================================================
  return (
    <div className="itemDiv" onDoubleClick={onContactSelect}>
      {/* decoration */}
      <span className="initialSpan" style={bgColor()}>
        {initials}
      </span>
      {/* decoration */}
      <p id="contactName">{contact.fName + ' ' + contact.lName}</p>
      <span className="spanX" onClick={onContactDelete}>
        x
      </span>
    </div>
  );
}

export default ContactItem;
