import React from 'react';
import PropTypes from 'prop-types';
import JobsTableHeader from "./components/CustomerTableHeader/CustomerTableHeader";
import CustomerRow from "./components/CustomerRow/CustomerRow";
import SearchFieldContainer from "../SearchField/SearchFieldContainer";
import InsertNewRow from "./components/InsertNewRow";

class CustomerList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {insertNew: false}
  }

  render() {
    const {customers} = this.props;
    return(
      <div className="container">
        <div className="col-xs-12">
          <SearchFieldContainer/>
          <table className="table table-striped jobs-table">
            <JobsTableHeader colNames={['Company', 'Total Hours', 'Total Amount']}/>
            <tbody className="text-left">
            {customers.map(j =>
              <CustomerRow customer={j} key={j._id} removeCustomer={this.props.removeCustomer}/>
            )}
            {this.state.insertNew && <InsertNewRow onSave={this.onCreateCustomer}/>}
            </tbody>
          </table>
          <button className="btn btn-default" onClick={() => this.setState({insertNew: true})}>Add</button>
        </div>
      </div>
    )
  }

  onCreateCustomer = (customer) => {
    this.props.createCustomer(customer);
    this.setState({insertNew: false})
  };
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  createCustomer: PropTypes.func.isRequired,
  removeCustomer: PropTypes.func.isRequired
};

export default CustomerList;