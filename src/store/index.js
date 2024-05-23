import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export default configureStore({
  reducer: {
    contactList: () => {},
    currentContact: {},
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
