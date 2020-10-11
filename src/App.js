import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm';
import LogIn from './components/LogIn';
import Product from './components/Product';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Order from './components/Order';
import Vendor from './components/Vendor';
import Report from './components/Report';
import Dashboard from './components/Dashboard';
import User from './components/User';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact={true} component={LogIn}/>
            <Route path="/reg" exact={true} component={RegistrationForm}/>
            <Route path="/dashboard" exact={true} component={Dashboard}/>
            <Route path="/dashboard" exact={true} component={Header}/>
            <Route path="/product" exact={true} component={Product}/>
            <Route path="/order" exact={true} component={Order}/>
            <Route path="/vendor" exact={true} component={Vendor}/>
            <Route path="/user" exact={true} component={User}/>
            <Route path="/report" exact={true} component={Report}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
