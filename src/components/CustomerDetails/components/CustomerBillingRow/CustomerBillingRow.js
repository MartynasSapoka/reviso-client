import React from 'react';
import PropTypes from 'prop-types';
import './CustomerBillingRow.css';
import moment from 'moment';

const CustomerBillingRow = ({billing, onRemove}) => (
  <tr className="CustomerBillingRow">
    <td>{moment(billing.timestamp).format('DD-MM-YYYY')}</td>
    <td>{billing.hours}</td>
    <td>{billing.hourlyRate}</td>
    <td>€{billing.hours * billing.hourlyRate}</td>
    <td><span className="glyphicon glyphicon-remove" onClick={onRemove.bind(null, billing)}/></td>
  </tr>
);

CustomerBillingRow.propTypes = {
  billing: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default CustomerBillingRow;