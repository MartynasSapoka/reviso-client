import {FETCH_ALL_CUSTOMERS} from "../actions/CustomerActions";

const customers = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CUSTOMERS:
      return action.customers;
    default: return state;
  }
};

export default customers;