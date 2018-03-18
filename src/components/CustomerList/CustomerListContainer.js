import React from "react";
import {connect} from 'react-redux'
import ClientsTable from './CustomerList';
import {createCustomer, fetchAllCustomers, removeCustomer} from "../../actions/CustomerActions";

class CustomerListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const {fetchData, ...rest} = this.props;
    return <ClientsTable {...rest}/>
  }
}


const mapStateToProps = state => {
  return {
    customers: state.filter.text ? state.customers.filter(c => c.name.toLowerCase().includes(state.filter.text.toLowerCase())) : state.customers
  }
};

CustomerListContainer = connect(
  mapStateToProps,
  dispatch => ({
    fetchData: () => dispatch(fetchAllCustomers),
    createCustomer: customer => dispatch(createCustomer(customer)),
    removeCustomer: (customer) => dispatch(removeCustomer(customer))
  })
)(CustomerListContainer);

export default CustomerListContainer;