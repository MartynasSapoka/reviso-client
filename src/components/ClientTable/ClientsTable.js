import React from 'react';
import PropTypes from 'prop-types';
import JobsTableHeader from "../JobsTableHeader/JobsTableHeader";
import CustomerRow from "../CustomerRow/CustomerRow";
import SearchFieldContainer from "../SearchField/SearchFieldContainer";
import InsertNewRow from "./components/InsertNewRow";

class ClientsTable extends React.Component {

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
            <JobsTableHeader colNames={['Company', 'Total Hours']}/>
            <tbody className="text-left">
            {customers.map(j =>
              <CustomerRow customer={j} key={j._id}/>
            )}
            {this.state.insertNew && <InsertNewRow onSave={this.props.createCustomer}/>}
            </tbody>
          </table>
          <button className="btn btn-default" onClick={() => this.setState({insertNew: true})}>Add</button>
        </div>
      </div>
    )
  }
}


ClientsTable.propTypes = {
  customers: PropTypes.array.isRequired
};

export default ClientsTable;