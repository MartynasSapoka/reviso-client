import React from 'react';
import './CustomerDetails.css';

const CustomerDetails = ({customer}) => (
  <div className="customer-details">
    <div className="container">
      <div className="col-xs-12 col-sm-6 text-left">
        <label>Name</label>
        <p>{customer.name}</p>
        <table className="table table-striped">

        </table>
      </div>
    </div>
  </div>
);

export default CustomerDetails;