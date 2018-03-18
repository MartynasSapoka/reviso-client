import {FETCH_ALL_CUSTOMERS, FETCH_CUSTOMER, UPDATE_CUSTOMER} from "../actions/CustomerActions";

const customers = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CUSTOMERS:
      return action.customers;
    case FETCH_CUSTOMER:
      return [...state.filter(x => x._id !== action.data._id), action.data];
    default: return state;
  }
};

export default customers;