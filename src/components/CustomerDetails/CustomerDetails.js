import React from 'react';
import './CustomerDetails.css';

const CustomerDetails = ({customer}) => (
  <div className="customer-details">
    <div className="container">
      <div className="col-xs-12 col-sm-6 text-left">
        <label>Title</label>
        <p>{customer.name}</p>
        {/*<label>Job Description</label>*/}
        {/*<p>{customer.description}</p>*/}
        {/*<label>Location</label>*/}
        {/*<p>{`${customer.location.city}, ${customer.location.country}`}</p>*/}
        {/*<label>Company Description</label>*/}
        {/*<p>{customer.company.description}</p>*/}
      </div>
    </div>
  </div>
);

export default CustomerDetails;