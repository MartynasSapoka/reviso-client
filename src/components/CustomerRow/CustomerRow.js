import React from 'react';
import PropTypes from 'prop-types';
import './JobRow.css';
import {Link} from "react-router-dom";

const CustomerRow = ({customer}) => (
  <tr className="JobRow">
    <td><Link to={`customers/${customer._id}`}>{customer.name}</Link></td>
    <td>{customer.billings.reduce((total, b) => total + b.hours, 0)}</td>
    <td>€{customer.billings.map(b => b.hours * b.hourlyRate).reduce((total, b) => total + b, 0)}</td>
    <td>€{customer.billings.map(b => b.hours * b.hourlyRate).reduce((total, b) => total + b, 0)}</td>

  </tr>
);

CustomerRow.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerRow;