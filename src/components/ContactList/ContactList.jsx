import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
// ---------------------------------------------------------------------------------------------
import {
  getContacts,
  addContact,
  selectContact,
  delContact,
} from "../../store/slices/contactSlice";
// =============================================================================================

function ContactList() {
  const contacts = useSelector((state) => state.contactList.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const addNewContact = () => {
    dispatch(addContact());
  };

  const onContactDelete = (event, id) => {
    event.stopPropagation();
    dispatch(delContact(id));
  };

  return (
    <div className="contactList">
      <div className="listItems">
        {contacts.map((contact) => (
          <ListItem key={contact.id}>
            <ListItemButton
              onDoubleClick={() => dispatch(selectContact(contact))}
            >
              <ListItemText primary={`${contact.fName} ${contact.lName}`} />
            </ListItemButton>
            <button onClick={(e) => onContactDelete(e, contact.id)}>
              Delete
            </button>
          </ListItem>
        ))}
      </div>
      <button className="buttonNew" onClick={addNewContact}>
        New
      </button>
    </div>
  );
}
export default ContactList;
