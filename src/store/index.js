import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reducer from './reducers/contactsReducer';
import {composeWithDevTools} from '@redux-devtools/extension'
// import rootReducer from './reducers'

const middleware = applyMiddleware(logger)

export default createStore(reducer, composeWithDevTools(middleware));

