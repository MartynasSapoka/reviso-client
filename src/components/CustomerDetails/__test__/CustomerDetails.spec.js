import React from 'react';
import {shallow, mount, render} from 'enzyme';
import CustomerDetails from "../CustomerDetails";
import {StaticRouter} from "react-router-dom";


const customerData = {
  "billings":
    [{
      "timestamp": "2018-03-18T19:19:00.496Z",
      "hours": 12,
      "hourlyRate": 8,
      "_id": "5aaebad500458185fb51e4cb"
    }, {
      "timestamp": "2018-03-18T19:19:00.496Z",
      "hours": 50,
      "hourlyRate": 8,
      "_id": "5aaebc8c6d0e8f8826c4707f"
    }, {
      "timestamp": "2018-03-18T19:24:09.078Z",
      "hours": 999,
      "hourlyRate": 2,
      "_id": "5aaebcf3237def88839bbca0"
    }, {
      "timestamp": "2018-03-18T19:27:44.558Z",
      "hours": 12,
      "hourlyRate": 32,
      "_id": "5aaebdb0c45e9388c0ecde6e"
    }, {
      "timestamp": "2018-03-18T19:53:54.898Z",
      "hours": 55,
      "hourlyRate": 44,
      "_id": "5aaec3d21c5603897a997e85"
    }, {
      "timestamp": "2018-03-18T20:31:01.788Z",
      "hours": 99,
      "hourlyRate": 2,
      "_id": "5aaecc851c5603897a997e89"
    }, {
      "timestamp": "2018-03-19T19:31:55.708Z",
      "hours": 123,
      "hourlyRate": 15,
      "_id": "5ab0102b84a389b5aa597031"
    }], "_id":
    "5aaea959dd0322810727413c", "name":
    "Test", "__v":
    0
};

describe('CustomerDetails', () => {
  const updateFnMock = jest.fn();
  it('Renders without crashing', () => {
    const wrapper = shallow(<CustomerDetails customer={customerData} updateCustomer={updateFnMock}/>)
  });

  it('Renders a list of billings', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <CustomerDetails customer={customerData} updateCustomer={updateFnMock}/>
      </StaticRouter>);
    expect(wrapper.find('.CustomerBillingRow')).toBeDefined();
  });

  it('Calls updateCustomer() when remove button is clicked', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <CustomerDetails customer={customerData} updateCustomer={updateFnMock}/>
      </StaticRouter>);
    wrapper.find('.glyphicon-remove').first().simulate('click');
    expect(updateFnMock).toBeCalled();
  })
});