import React from 'react';
import './CustomerBillingRow.css';

const CustomerBillingRow = ({billing, onRemove}) => (
  <tr className="CustomerBillingRow">
    <td>{billing.timestamp}</td>
    <td>{billing.hours}</td>
    <td>{billing.hourlyRate}</td>
    <td>€{billing.hours * billing.hourlyRate}</td>
    <td><span className="glyphicon glyphicon-remove" onClick={onRemove.bind(null, billing)}/></td>
  </tr>
);

export default CustomerBillingRow;