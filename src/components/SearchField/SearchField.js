import React from 'react';
import {throttle} from 'lodash';
import './SearchField.css'

const SearchField = ({changeHandler}) => {

  const onChangeThrottled = throttle(changeHandler, 500, {leading: false});

  return (
    <div className="SearchField">
      <div className="input-group">
        <span className="input-group-addon">Search</span>
        <input className="form-control" onChange={e => onChangeThrottled(e.target.value)}/>
      </div>
    </div>
  )
};

export default SearchField;
