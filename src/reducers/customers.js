import {FETCH_ALL_CUSTOMERS, FETCH_CUSTOMER, REMOVE_CUSTOMER} from "../actions/CustomerActions";

const customers = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CUSTOMERS:
      return action.customers;
    case FETCH_CUSTOMER:
      return [...state.filter(x => x._id !== action.data._id), action.data];
    case REMOVE_CUSTOMER:
      return state.filter(c => c._id !== action.data._id);
    default: return state;
  }
};

export default customers;