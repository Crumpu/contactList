import { contactsState } from '../../model/contactsState';

const initialState = {
  contacts: contactsState,
};

export default function contactsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case 'addContact':
      return { ...state, contacts: [...state.contacts, payload] };
    case 'delContact':
      return {
        ...state,
        contacts: state.contacts.filter((contact) => payload !== contact.id),
      };
    // case 'selectContact':
    //   return {
    //     ...state,
    //     contacts: state.contacts.map((contact) =>
    //       contact.id === payload ? { ...contact } : contact
    //     ),
    //   };
    //   case 'updateContact':
    //       return {
    //           ...state, contacts: state.contacts.map((contact) => {
    //               contact.id ? 
    //       })
    //       };
      case 'getContacts':
          return {...state, contacts: [...payload]}
    default:
      return state;
  }
}

