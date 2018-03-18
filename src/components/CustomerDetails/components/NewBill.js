import React from 'react';
import PropTypes from 'prop-types';

class NewBill extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    onSave: PropTypes.func.isRequired
  };

  render() {
    return(
      <tr>
        <td>
          <label>Hours</label>
          <input type="number" value={this.state.hours} onChange={e => this.setState({hours: e.target.value})}/>
        </td>
        <td>
          <label>Hourly Rate</label>
          <input type="number" value={this.state.hourlyRate} onChange={e => this.setState({hourlyRate: e.target.value})}/>
        </td>
        <td><button className="btn btn-default" onClick={this.onSave}>Save</button></td>
      </tr>
    )
  }

  onSave = () => {
    if (this.state.hours && this.state.hourlyRate) {
      this.props.onSave(this.state);
      this.setState({
        hours: '',
        hourlyRate: ''
      })
    }
  };
}

export default NewBill;