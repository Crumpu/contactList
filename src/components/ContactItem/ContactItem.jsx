import { useDispatch } from 'react-redux';
// ======================================
import { delContact, selectContact } from '../../store/slices/contactSlice';
// ======================================
import './ContactItem.css';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const { id, fName, lName, color } = contact;

  const onContactSelect = () => {
    dispatch(selectContact(contact));
  };

  const onContactDelete = (event) => {
    event.stopPropagation();
    dispatch(delContact(id));
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
        &#10006;
      </span>
    </div>
  );
}

export default ContactItem;
