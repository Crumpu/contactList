import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/contact-service';
import { contactsState } from '../../model/contactsState';
import { CONTACT_SlICE_NAME } from '../../constants/constants';

const initialState = {
  contacts: contactsState,
  isFetching: false,
  error: null,
};

const createEmptyContact = () => {
    return {
          id: null,
      fName: "",
      lName: "",
      email: "",
      telNumber: "",
    }
}

const contactSlice = createSlice({
  name: CONTACT_SlICE_NAME,
  initialState,
  reducers: {
    selectContact(state, { payload }) {
      state.currentContact = payload;
      },
      addNewContact(state) {
          state.
      }
  },
});
