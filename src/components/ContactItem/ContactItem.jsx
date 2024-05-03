
import { connect } from 'react-redux';
import { delContact, selectContact } from '../../store/actions/contactsActions';
import './ContactItem.css';

function ContactItem({ contact,  }) {
  const onContactSelect = () => {
    selectContact(contact);
  };

const {id, fName, lName, color } = contact

  const onContactDelete = (event) => {
    event.stopPropagation();
    delContact(id);
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

const mapDispatchToProps = {
  delContact,
  selectContact,
}


export default connect(null, mapDispatchToProps)(ContactItem);
