import PropTypes from 'prop-types';
import './ContactItem.css';

function ContactItem({ contact, onDelete, onSelect }) {
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
      <span className="initialSpan" style={contact.color}>
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

ContactItem.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
};

export default ContactItem;
