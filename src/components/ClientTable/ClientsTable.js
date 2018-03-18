import React from 'react';
import PropTypes from 'prop-types';
import JobsTableHeader from "../JobsTableHeader/JobsTableHeader";
import CustomerRow from "../CustomerRow/CustomerRow";
import SearchFieldContainer from "../SearchField/SearchFieldContainer";

const ClientsTable = ({customers}) => (
  <div className="container">
    <div className="col-xs-12">
      <SearchFieldContainer/>
      <table className="table table-striped jobs-table">
        <JobsTableHeader colNames={['Company', 'Total Hours']}/>
        <tbody className="text-left">
        {customers.map((j, i) =>
          <CustomerRow customer={j} key={j._id}/>
        )}
        </tbody>
      </table>
    </div>
  </div>
);

ClientsTable.propTypes = {
  customers: PropTypes.array.isRequired
};

export default ClientsTable;