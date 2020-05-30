import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../store/reducers'

import logger from 'redux-logger';


function configureStore() {
    return createStore(reducer, {}, applyMiddleware(thunk, logger));
}

const store = configureStore();
export default store;