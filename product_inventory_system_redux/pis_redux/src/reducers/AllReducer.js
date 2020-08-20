import {combineReducers} from 'redux';
import allProductsReducers from './allProducts';
const allReducers=combineReducers({
     allProducts:allProductsReducers,   
});

export default allReducers;