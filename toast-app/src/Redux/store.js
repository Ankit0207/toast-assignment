import { combineReducers,legacy_createStore } from 'redux';
import toastReducer from './reducer';

const rootReducer = combineReducers({
    toastReducer
});

const store = legacy_createStore(rootReducer);

export default store;
