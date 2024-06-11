import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/contact-service';
import { contactsState } from '../../model/contactsState';
import { CONTACT_SLICE_NAME } from '../../constants/constants';
import { emptyContact } from '../../constants/constants';

const initialState = {
  contacts: contactsState,
  isFetching: false,
  error: null,
  currentContact: emptyContact,
};

export const getContacts = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/getContacts`,
  async function (_, { rejectWithValue }) {
    try {
      const response = await api.get(`/${CONTACT_SLICE_NAME}`);
      if (response.status >= 400) {
        throw new Error(`Error status is ${response.status}`);
      }
      const { data } = response;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const delContact = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/delContact`,
  async function (id, { rejectWithValue }) {
    try {
      const response = await api.delete(`/${CONTACT_SLICE_NAME}/${id}`);
      if (response.status >= 400) {
        throw new Error(`Error status is ${response.status}`);
      }
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createContact = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/createContact`,
  async function (contact, { rejectWithValue }) {
    try {
      const response = await api.post(`/${CONTACT_SLICE_NAME}`, contact);
      if (response.status >= 400) {
        throw new Error(
          `Can't create new contact. Error status is ${response.status}`
        );
      }
      const { data } = response;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/updateContact`,
  async function (contact, { rejectWithValue }) {
    try {
      const response = await api.put(
        `${CONTACT_SLICE_NAME}/${contact.id}`,
        contact
      );
      if (response.status >= 400) {
        throw new Error(`Can't update contact. Error is ${response.status}`);
      }
      const { data } = response;
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Helpers

const setError = (state, action) => {
  state.isFetching = false;
  state.error = action.payload;
};

const setFetching = (state) => {
  state.isFetching = true;
  state.error = null;
};

const contactSlice = createSlice({
  name: CONTACT_SLICE_NAME,
  initialState,
  reducers: {
    selectContact(state, { payload }) {
      state.currentContact = payload;
    },
    addContact(state) {
      state.currentContact = emptyContact;
    },
  },
  extraReducers: (builder) => {
    //   Get all
    builder.addCase(getContacts.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.error = null;
      state.contacts = payload;
    });
    builder.addCase(getContacts.pending, setFetching);
    builder.addCase(getContacts.rejected, setError);
    // Create
    builder.addCase(createContact.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.error = null;
      state.contacts.push(payload);
      state.currentContact = emptyContact;
    });
    builder.addCase(createContact.pending, setFetching);
    builder.addCase(createContact.rejected, setError);
    // Update
    builder.addCase(updateContact.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.error = null;
      state.contacts = state.contacts.map((contact) =>
        contact.id === payload.id ? payload : contact
      );
    });
    builder.addCase(updateContact.pending, setFetching);
    builder.addCase(updateContact.rejected, setError);
    // Delete
    builder.addCase(delContact.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.error = null;
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload
      );
      state.currentContact =
        state.currentContact.id === payload
          ? emptyContact
          : state.currentContact;
    });
    builder.addCase(delContact.pending, setFetching);
    builder.addCase(delContact.rejected, setError);
  },
});

const { actions, reducer } = contactSlice;
export const { selectContact, addContact } = actions;

export default reducer;
