import React from 'react';
import './CustomerDetails.css';
import CustomerBillingRow from "./components/CustomerBillingRow";
import NewBill from "./components/NewBill";

class CustomerDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {addNewBill: false}
  }

  render() {
    const {customer} = this.props;
    return(
      <div className="customer-details">
        <div className="container">
          <div className="col-xs-12 col-sm-6 text-left">
            <h1>{customer.name}</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Hours</td>
                  <td>Hourly Rate</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
              {customer.billings.map(b => <CustomerBillingRow billing={b} key={b.timestamp}/>)}
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
  }
}

export default CustomerDetails;