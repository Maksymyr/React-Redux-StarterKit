
import { createStore, applyMiddleware } from 'redux';

import {createLogger} from 'redux-logger';

import reducers from '../reducers';
import middleware from './middleware';

const extendPostData = store => next => action => {

    next(action);
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(middleware));

export default store;



