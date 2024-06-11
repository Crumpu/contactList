import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
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

  return (
    <div className="contactList">
      <div className="listItems">
        {contacts.map((contact) => (
          <ListItem key={contact.id}>
            <ListItemButton
              sx={{
                height: "max-content",
                margin: "1vh",
                padding: 0,
                fontSize: "large",
                backgroundColor: "rgb(236, 236, 236)",
                boxShadow: "0px 2px 3px 2px rgba(0, 0, 0, 0.6)",
                borderTopLeftRadius: "2rem",
                borderBottomLeftRadius: "2rem",
                borderTopRightRadius: "5%",
                borderBottomRightRadius: "5%",
                cursor: "pointer",
              }}
              onDoubleClick={() => dispatch(selectContact(contact))}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    margin: "3px",
                    width: 35,
                    height: 35,
                    fontSize: 18,
                    fontWeight: 900,
                    backgroundColor: contact.color,
                  }}
                >
                  {contact.fName.trim().slice(0, 1).toUpperCase() +
                    contact.lName.trim().slice(0, 1).toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{
                  marginRight: 2,
                  color: "black",
                }}
                primary={`${contact.fName} ${contact.lName}`}
                primaryTypographyProps={{ fontSize:'large' }}
              />

              <PersonRemoveIcon
                onClick={() => dispatch(delContact(contact.id))}
                sx={{
                  fontSize: 25,
                  color: "grey",
                  marginRight: "3px",
                  "&:hover": {
                    color: "red",
                  },
                }}
              />
            </ListItemButton>
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
