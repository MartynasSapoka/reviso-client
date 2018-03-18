import React from 'react';
import PropTypes from 'prop-types';
import './CustomerDetails.css';
import CustomerBillingRow from "./components/CustomerBillingRow";
import NewBill from "./components/NewBill";

class CustomerDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {addNewBill: false}
  }

  static propTypes = {
    customer: PropTypes.object.isRequired,
    updateCustomer: PropTypes.func.isRequired
  };

  render() {
    const {customer} = this.props;
    return(
      <div className="customer-details">
        <div className="container">
          <div className="col-xs-12 text-left">
            <h1>{customer.name}</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <td className="col-xs-2">Date</td>
                  <td className="col-xs-2">Hours</td>
                  <td className="col-xs-2">Hourly Rate</td>
                  <td className="col-xs-2">Total</td>
                  <td className="col-xs-1"/>
                </tr>
              </thead>
              <tbody>
              {customer.billings.map(b => <CustomerBillingRow billing={b} key={b._id} onRemove={this.onRemove}/>)}
              {this.state.addNewBill && <NewBill onSave={this.onSave.bind(this)}/>}
              </tbody>
            </table>
            <button className="btn btn-default" onClick={this.onAddBill}>Add</button>
          </div>
        </div>
      </div>
    )
  }

  onAddBill = () => this.setState({addNewBill: true});

  onSave = (bill) => {
    this.props.updateCustomer({...this.props.customer, billings: [...this.props.customer.billings, bill]})
  };

  onRemove = (billing) => {
    this.props.updateCustomer({...this.props.customer, billings: this.props.customer.billings.filter(b => b._id !== billing._id)});
  }
}

export default CustomerDetails;