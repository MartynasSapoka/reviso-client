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
    customers: state.customers.map(c =>  {
      c.totalHours = c.billings.reduce((total, b) => total + b.hours, 0);
      return c;
    })
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