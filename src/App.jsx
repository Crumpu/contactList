import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import './App.css';

function App() {
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
