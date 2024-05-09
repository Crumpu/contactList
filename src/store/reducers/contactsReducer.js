import { contactsState } from '../../model/contactsState';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  contacts: contactsState,
  currentContact: createEmptyContact(),
};

export default function contactsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case ACTION_TYPES.CREATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
        currentContact: createEmptyContact(),
      };
    case ACTION_TYPES.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => payload !== contact.id),
        currentContact: createEmptyContact(),
      };
    case ACTION_TYPES.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload ? { ...contact } : contact
        ),
      };
    case ACTION_TYPES.SELECT_CONTACT:
      return {
        ...state,
        currentContact: payload,
      };
    case ACTION_TYPES.GET_CONTACTS:
      return { ...state, contacts: [...payload] };
    case ACTION_TYPES.ADD_CONTACT:
      return { ...state, currentContact: createEmptyContact() };
    default:
      return state;
  }
}

function createEmptyContact() {
  return {
    id: null,
    fName: '',
    lName: '',
    email: '',
    telNumber: '',
  };
}
