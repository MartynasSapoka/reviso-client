import { combineReducers } from 'redux'
import customers from "./customers";
import filter from "./search";

const customersApp = combineReducers({
  customers,
  filter
});

export default customersApp;