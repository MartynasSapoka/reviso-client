import HttpClient from "../core/HttpClient";

export const FETCH_ALL_CUSTOMERS = 'FETCH_ALL_CUSTOMERS';
const receiveAllCustomers = (customers) => ({
  type: FETCH_ALL_CUSTOMERS,
  customers
});

export const fetchAllCustomers = async (dispatch) => {
  const response = await HttpClient.get('http://localhost:8080/api/clients');
  dispatch(receiveAllCustomers(response));
};

export const FETCH_CUSTOMER = 'FETCH_CUSTOMER';
const receiveCustomer = customer => ({
  type: FETCH_CUSTOMER,
  data: customer
});

export const createCustomer = (customer) => async (dispatch) => {
  const response = await HttpClient.post('http://localhost:8080/api/clients', customer);
  dispatch(receiveCustomer(response));
};

export const fetchCustomer = (customerId) => async (dispatch) => {
  const response = await HttpClient.get(`http://localhost:8080/api/clients/${customerId}`);
  dispatch(receiveCustomer(response));
};

// export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
// const updateCustomerAction = (customer) => ({
//   type: FETCH_CUSTOMER,
//   data: customer
// });

export const updateCustomer = (customer) => async (dispatch) => {
  const response = await HttpClient.put(`http://localhost:8080/api/clients/${customer._id}`, customer);
  dispatch(receiveCustomer(response));
};