import {connect} from 'react-redux'
import ClientDetails from './ClientDetails';

const mapStateToProps = (state, ownProps) => {
  const jobId = parseInt(ownProps.match.params.jobId, 10);
  return {
    client: state.customers.filter(x => x.id === jobId)[0] //TODO Check for empty array
  };
};

const ClientDetailsContainer = connect(mapStateToProps)(ClientDetails);

export default ClientDetailsContainer;