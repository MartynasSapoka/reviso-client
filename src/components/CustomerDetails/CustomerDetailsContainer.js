import {connect} from 'react-redux'
import CustomerDetails from './CustomerDetails';

const mapStateToProps = (state, ownProps) => {
  const customerId = ownProps.match.params.customerId;
  return {
    customer: state.customers.filter(x => x._id === customerId)[0] //TODO Check for empty array
  };
};

const CustomerDetailsContainer = connect(mapStateToProps)(CustomerDetails);

export default CustomerDetailsContainer;