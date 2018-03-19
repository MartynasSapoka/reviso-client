import React from 'react';
import PropTypes from 'prop-types';
import './AddCustomer.css';

class AddCustomer extends React.Component {

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  };

  render() {
    return(
      <tr className="AddCustomer">
        <td>
          <p>Name</p>
          <input type="text" onChange={this.onChangeName}/>
        </td>
        <td/>
        <td/>
        <td className="action-buttons">
          <button className="btn btn-default" onClick={this.onSave}>Save</button>
          <button className="btn btn-default" onClick={this.props.onCancel}>Cancel</button>
        </td>
      </tr>
    )
  }
  onSave = () => {
    if (this.state.name) {
      this.props.onSave(this.state);
    }
  };

  onChangeName = e => this.setState({name: e.target.value})
}

export default AddCustomer;