import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import jobsApp from "./reducers";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const store = createStore(jobsApp, applyMiddleware(
  thunkMiddleware,
  createLogger(),
));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

