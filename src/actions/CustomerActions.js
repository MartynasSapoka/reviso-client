export const FETCH_ALL_CUSTOMERS = 'FETCH_ALL_CUSTOMERS';
const receiveAllCustomers = (customers) => ({
  type: FETCH_ALL_CUSTOMERS,
  customers
});

export const fetchAllCustomers = async (dispatch) => {
  const response = await fetch('http://localhost:8080/api/clients');
  const json = await response.json();
  dispatch(receiveAllCustomers(json));
};