import PropTypes from 'prop-types';
import './ContactItem.css';

function ContactItem({ contact, onDelete, onSelect }) {
  const onContactSelect = () => {
    onSelect(contact);
  };

  console.log(contact)

const {id, fName, lName, color } = contact

  const onContactDelete = (event) => {
    event.stopPropagation();
    onDelete(id);
  };

  // ===================decoration===================

  const initials =
   fName.trim().slice(0, 1).toUpperCase() +
   lName.trim().slice(0, 1).toUpperCase();
  // ================================================
  return (
    <div className="itemDiv" onDoubleClick={onContactSelect}>
      {/* decoration */}
      <span className="initialSpan" style={{ backgroundColor: color }}>
        {initials}
      </span>
      {/* decoration */}
      <p id="contactName">{fName + ' ' + lName}</p>
      <span className="spanX" onClick={onContactDelete}>
        &#10008;
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
