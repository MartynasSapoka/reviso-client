import HttpClient from "../core/HttpClient";

export const FETCH_ALL_CUSTOMERS = 'FETCH_ALL_CUSTOMERS';
const receiveAllCustomers = (customers) => ({
  type: FETCH_ALL_CUSTOMERS,
  customers
});

export const fetchAllCustomers = async (dispatch) => {
  const response = await HttpClient.get('http://localhost:8080/api/clients');
  const json = await response.json();
  dispatch(receiveAllCustomers(json));
};


export const FETCH_CUSTOMER = 'FETCH_CUSTOMER';
const receiveCustomer = customer => ({
  type: FETCH_CUSTOMER,
  data: customer
});

export const createCustomer = (customer) => async (dispatch) => {
  const response = await HttpClient.post('http://localhost:8080/api/clients', customer);
  const json = await response.json();
  dispatch(receiveCustomer(json));
};