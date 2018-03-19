import React from 'react';
import PropTypes from 'prop-types';
import './CustomerRow.css';
import {Link} from "react-router-dom";

const CustomerRow = ({customer, removeCustomer}) => (
  <tr className="CustomerRow">
    <td><Link to={`customers/${customer._id}`}>{customer.name}</Link></td>
    <td>{customer.billings.reduce((total, b) => total + b.hours, 0)}</td>
    <td>€{customer.billings.map(b => b.hours * b.hourlyRate).reduce((total, b) => total + b, 0)}</td>
    <td><span className="glyphicon glyphicon-remove" onClick={() => removeCustomer(customer)}/></td>
  </tr>
);

CustomerRow.propTypes = {
  customer: PropTypes.object.isRequired,
  removeCustomer: PropTypes.func.isRequired
};

export default CustomerRow;