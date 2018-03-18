import React from 'react';
import PropTypes from 'prop-types';
import './JobRow.css';

const CustomerRow = ({customer}) => (
  <tr className="JobRow">
    <td>{customer.name}</td>
    <td>{customer.totalHours}</td>
  </tr>
);

CustomerRow.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerRow;