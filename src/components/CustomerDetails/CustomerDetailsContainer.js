import {connect} from 'react-redux'
import CustomerDetails from './CustomerDetails';
import {fetchCustomer} from "../../actions/CustomerActions";
import React from "react";
import {withRouter} from "react-router-dom";

class CustomerDetailsContainer extends React.Component {
  componentDidMount() {
    if (!this.props.customer)
      this.props.fetchCustomer(this.props.match.params.customerId)
  }

  render() {
    return(
      this.props.customer ? <CustomerDetails customer={this.props.customer}/> : <p>Loading...</p>
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
      fetchCustomer: (customerId) => dispatch(fetchCustomer(customerId))
    })
  )(CustomerDetailsContainer));

export default CustomerDetailsContainer;