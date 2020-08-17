import {combineReducers} from 'redux';
import firstnameReducer from './firstnameReducer';
import lastnamereducer from './lastnameReducer';

const allReducers=combineReducers({
    firstname:firstnameReducer,
    lastname:lastnamereducer

})
export default allReducers;