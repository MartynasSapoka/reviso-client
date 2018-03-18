import React from 'react';
import PropTypes from 'prop-types';
import './JobRow.css';
import {Link} from "react-router-dom";

const CustomerRow = ({customer}) => (
  <tr className="JobRow">
    <td><Link to={`customers/${customer._id}`}>{customer.name}</Link></td>
    <td>{customer.totalHours}</td>
    <td>€{customer.billings.reduce((total, b) => total + b.total, 0)}</td>
  </tr>
);

CustomerRow.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerRow;