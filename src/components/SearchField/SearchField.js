import React from 'react';
import {debounce} from 'lodash';
import './SearchField.css'

const SearchField = ({changeHandler}) => {

  const onChangeThrottled = debounce(changeHandler, 500, {leading: false, trailing: true});

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
