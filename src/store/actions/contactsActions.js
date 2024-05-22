import ACTION_TYPES from './actionTypes';

//  Creating

export const createContactAction = (contact) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_ACTION,
    payload: contact,
  };
};

export const createContactRequest = () => {
  return {
    type: ACTION_TYPES.POST_CONTACT_REQUEST,
  };
};
export const createContactSuccess = (contact) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_SUCCESS,
    payload: contact,
  };
};

export const createContactError = (error) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_ERROR,
    payload: error,
  };
};
// Delete

export const delContactAction = (id) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ACTION,
    payload: id,
  };
};

export const delContactRequest = () => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_REQUEST,

  };
};

export const delContactSuccess = (arrContacts) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_SUCCESS,
    payload: arrContacts,
  };
};

export const delContactError = (error) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ERROR,
    payload: error,
  };
};

//  Selecting

export const selectContactAction = (contact) => {
  return {
    type: ACTION_TYPES.SELECT_CONTACT_ACTION,
    payload: contact,
  };
};

// Updating

export const updateContactAction = (contact) => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_ACTION,
    payload: contact,
  };
};

export const updateContactRequest = () => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_REQUEST,
  };
};

export const updateContactSuccess = (contact) => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_SUCCESS,
    payload: contact,
  };
};

export const updateContactError = (error) => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_ERROR,
    payload: error,
  };
};

// Getting

export const getContactsAction = () => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_ACTION,
  };
};

export const getContactsRequest = () => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_REQUEST,
  };
};

export const getContactsSuccess = (contacts) => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_SUCCESS,
    payload: contacts,
  };
};

export const getContactsError = (error) => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_ERROR,
    payload: error,
  };
};

// Adding

export const addContactAction = () => {
  return {
    type: ACTION_TYPES.ADD_CONTACT_ACTION,
  };
};
