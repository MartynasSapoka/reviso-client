import {FETCH_ALL_CUSTOMERS, FETCH_CUSTOMER} from "../actions/CustomerActions";

const customers = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CUSTOMERS:
      return action.customers;
    case FETCH_CUSTOMER:
      return [...state, action.data];
    default: return state;
  }
};

export default customers;