import {connect} from 'react-redux'
import CustomerDetails from './CustomerDetails';
import {fetchCustomer, updateCustomer} from "../../actions/CustomerActions";
import React from "react";
import {withRouter} from "react-router-dom";

class CustomerDetailsContainer extends React.Component {
  componentDidMount() {
    if (!this.props.customer)
      this.props.fetchCustomer(this.props.match.params.customerId)
  }

  render() {
    const {history, location, match, fetchCustomer, ...rest} = this.props;
    return(
      this.props.customer ? <CustomerDetails {...rest}/> : <p>Loading...</p>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const customerId = ownProps.match.params.customerId;
  return {
    customer: state.customers.filter(x => x._id === customerId)[0] //TODO Check for empty array
  };
};

CustomerDetailsContainer =
  withRouter(connect(
    mapStateToProps,
    dispatch => ({
      fetchCustomer: (customerId) => dispatch(fetchCustomer(customerId)),
      updateCustomer: (customer) => dispatch(updateCustomer(customer))
    })
  )(CustomerDetailsContainer));

export default CustomerDetailsContainer;