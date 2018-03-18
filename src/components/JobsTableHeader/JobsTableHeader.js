import React from 'react';
import PropTypes from 'prop-types';

const JobsTableHeader = ({colNames}) => (
  <thead>
    <tr>
      {colNames.map((cn) => <th className="col-xs-3" key={cn}>{cn}</th>)}
    </tr>
  </thead>
);

JobsTableHeader.propTypes = {
  colNames: PropTypes.array.isRequired
};

export default JobsTableHeader;