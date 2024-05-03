import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import './App.css';

function App() {
  // const [contacts, setContacts] = useState([]);
  // const [currentContact, setCurrentContacts] = useState(createEmptyContact());

  // // ====================function createEmptyContact==============

  // function createEmptyContact() {
  //   return {
  //     id: null,
  //     fName: '',
  //     lName: '',
  //     email: '',
  //     telNumber: '',
  //     color: '',
  //   };
  // }

  // // ================get from storage================================

  // useEffect(() => {
  //   api.get('/').then(({ data }) => {
  //     if (!data) {
  //       setContacts([]);
  //     } else {
  //       setContacts(data);
  //     }
  //   });
  // }, []);

  // // ==============function addNewContact========================

  // const addNewContact = () => {
  //   setCurrentContacts(createEmptyContact());
  // };

  // // ============function selectContact========================

  // const selectContact = (contact) => setCurrentContacts(contact);

  // // ============function saveContact===========================

  // const saveContact = (contact) => {
  //   if (contact.id) {
  //     updateContact(contact);
  //   } else {
  //     createContact(contact);
  //   }
  // };

  // // ============function updateContact=========================

  // function updateContact(contact) {
  //   api.put(`/${contact.id}`, contact).then(({ data }) => {
  //     console.log(data);
  //     setContacts(
  //       contacts.map((item) => {
  //         return data.id === item.id ? data : item;
  //       })
  //     );
  //     setCurrentContacts(data);
  //   });
  // }

  // // ============function createContact=======================

  // const createContact = (contact) => {
  //   contact.color = bgColor(contact);
  //   api.post('/', contact).then(({ data }) => {
  //     const newContact = [...contacts, data];
  //     setContacts(newContact);
  //     setCurrentContacts(createEmptyContact());
  //   });
  // };

  // // ============function deleteContact=======================

  // const deleteContact = (id) => {
  //   api.delete(`/${id}`);
  //   const newContact = contacts.filter((contact) => contact.id !== id);
  //   setContacts(newContact);
  //   setCurrentContacts(createEmptyContact());
  // };

  // // ===========decoration========================================
  // const randomColor = () => {
  //   const min = 0;
  //   const max = 225;
  //   const color = Math.floor(Math.random() * (max - min) + min);
  //   return color;
  // };

  // const bgColor = () =>
  //   `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  // // -------------------------------------------------------------

  return (
    <>
      <div id="h1Div">
        <h1>Contact List</h1>
      </div>
      <div className="appDiv">
        <ContactList />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
