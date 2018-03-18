import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import ClientTableContainer from "./components/ClientTable/ClientTableContainer";
import ClientDetailsContainer from "./components/ClientDetails/ClientDetailsContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/"><h1 className="App-title">Give Me My Money</h1></Link>
          </header>
          <Route exact path="/" component={ClientTableContainer}/>
          <Route path="/clients/:clientId" component={ClientDetailsContainer}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
