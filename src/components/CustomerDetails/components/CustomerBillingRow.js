import React from 'react';

const CustomerBillingRow = ({billing}) => (
  <tr>
    <td>{billing.timestamp}</td>
    <td>{billing.hours}</td>
    <td>{billing.hourlyRate}</td>
    <td>€{billing.hours * billing.hourlyRate}</td>
  </tr>
);

export default CustomerBillingRow;