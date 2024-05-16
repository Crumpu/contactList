import { put } from 'redux-saga/effects';
import api from '../api/contact-service';
import {
  createContactRequest,
  createContactSuccess,
  createContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from '../store/actions/contactsActions';

export function* getContactsSaga() {
  yield put(getContactsRequest());
  try {
    const contacts = yield api.get('/').then(({ data }) => data);
    yield put(getContactsSuccess(contacts));
  } catch (error) {
    yield put(getContactsError(error));
  }
}

export function* createContactSaga({payload}) {
  yield put(createContactRequest());
  try {
    const newContact = yield api.post('/', payload).then(({ data }) => data);
    yield put(createContactSuccess(newContact));
  } catch (error) {
    yield put(createContactError(error));
  }
}

export function* updateContactSaga({ payload }) {
  yield put(updateContactRequest());
  try {
    const updateContact = yield api.put(`/${payload.id}`, payload).then(({ data }) => data);
    console.log(updateContact);
    yield put(updateContactSuccess(updateContact));
  } catch (error) {
    yield updateContactError(error);
  }
}

export function* deleteContactSaga({payload}) {
  yield put(delContactRequest());
  try {
    yield api.delete(`/${payload}`);
    yield put(delContactSuccess(payload));
  } catch (error) {
    delContactError(error);
  }
}
