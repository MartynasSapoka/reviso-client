import React from 'react';

class InsertNewRow extends React.Component {

  render() {
    return(
      <tr>
        <td>
          <label>Name</label>
          <input type="text" onChange={this.onChangeName}/>
        </td>
        <td>
          <button className="btn btn-default" onClick={this.onSave}>Save</button>
        </td>
      </tr>
    )
  }
  onSave = () => {
    if (this.state.name)
      this.props.onSave(this.state);
  };
  onChangeName = e => this.setState({name: e.target.value})
}

export default InsertNewRow;