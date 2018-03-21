import React from 'react';
import {shallow, mount, render} from 'enzyme';
import CustomerList from "../CustomerList";
import toJson from 'enzyme-to-json';

const customerList = [
  {
    "billings":
      [{
        "timestamp": "2018-03-18T19:19:00.496Z",
        "hours": 12,
        "hourlyRate": 8,
        "_id": "5aaebad500458185fb51e4cb"
      }],
    "_id": "5aaea959dd0322810727413c",
    "name": 'Test'
  },
  {
    "billings": [
      {
        "timestamp": "2018-03-12T00:00:00.000Z",
        "hours": 12,
        "hourlyRate": 10,
        "_id": "5ab0147d84a389b5aa597032"
      },
      {
        "timestamp": "2018-03-07T00:00:00.000Z",
        "hours": 42,
        "hourlyRate": 9,
        "_id": "5ab014b384a389b5aa597033"
      }],
    "_id": "5aaea9f2dd0322810727413e",
    "name": "Reviso",
  }
];

describe('CustomerList', () => {
  const removeFnMock = jest.fn();
  const createFnMock = jest.fn();
  it('Renders without crashing', () => {
    const wrapper = shallow(<CustomerList removeCustomer={removeFnMock} createCustomer={createFnMock}
                                          customers={customerList}/>)
  });

  it('Matches snapshot', () => {
    const wrapper = shallow(<CustomerList removeCustomer={removeFnMock} createCustomer={createFnMock} customers={customerList}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});