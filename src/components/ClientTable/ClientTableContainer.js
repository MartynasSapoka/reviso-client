import React from "react";
import {connect} from 'react-redux'
import ClientsTable from './ClientsTable';
import {createCustomer, fetchAllCustomers} from "../../actions/CustomerActions";

class ClientsTableContainer extends React.Component {
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

ClientsTableContainer = connect(
  mapStateToProps,
  dispatch => ({
    fetchData: () => dispatch(fetchAllCustomers),
    createCustomer: customer => dispatch(createCustomer(customer))
  })
)(ClientsTableContainer);

export default ClientsTableContainer;