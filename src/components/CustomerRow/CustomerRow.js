import React from 'react';
import PropTypes from 'prop-types';
import './JobRow.css';
import {Link} from "react-router-dom";

const CustomerRow = ({customer}) => (
  <tr className="JobRow">
    <td><Link to={`customers/${customer._id}`}>{customer.name}</Link></td>
    <td>{customer.totalHours}</td>
  </tr>
);

CustomerRow.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerRow;