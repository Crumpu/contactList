import { contactsState } from '../../model/contactsState';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  contacts: contactsState,
  isFetching: false,
  error: null,
  currentContact: createEmptyContact(),
};

export default function contactsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    // Success
    case ACTION_TYPES.POST_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, payload],
        currentContact: createEmptyContact(),
        isFetching: false,
      };
    case ACTION_TYPES.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => payload !== contact.id),
        currentContact: createEmptyContact(),
        isFetching: false,
      };
    case ACTION_TYPES.PUT_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload.id ? payload : contact
        ),
        isFetching: false,
      };
    case ACTION_TYPES.SELECT_CONTACT_ACTION:
      return {
        ...state,
        currentContact: payload,
        isFetching: false,
      };
    case ACTION_TYPES.GET_CONTACTS_SUCCESS:
      return { ...state, contacts: [...payload], isFetching: false };
    case ACTION_TYPES.ADD_CONTACT_ACTION:
      return {
        ...state,
        currentContact: createEmptyContact(),
        isFetching: false,
      };
    //  Requesting
    case ACTION_TYPES.POST_CONTACT_REQUEST:
    case ACTION_TYPES.DELETE_CONTACT_REQUEST:
    case ACTION_TYPES.PUT_CONTACT_REQUEST:
    case ACTION_TYPES.GET_CONTACTS_REQUEST:
      return { ...state, isFetching: true };
    // Error
    case ACTION_TYPES.POST_CONTACT_ERROR:
    case ACTION_TYPES.DELETE_CONTACT_ERROR:
    case ACTION_TYPES.PUT_CONTACT_ERROR:
    case ACTION_TYPES.GET_CONTACTS_ERROR:
      return { ...state, idFetching: false, error: payload };
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
