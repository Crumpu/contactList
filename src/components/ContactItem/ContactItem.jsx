import { useDispatch } from 'react-redux';
// ======================================
import {
  delContactAction,
  selectContactAction,
} from '../../store/slices/contactsActions';
// ======================================
import './ContactItem.css';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const { id, fName, lName, color } = contact;

  const onContactSelect = () => {
    dispatch(selectContactAction(contact));
  };

  const onContactDelete = (event) => {
    event.stopPropagation();
    dispatch(delContactAction(id));
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
