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
import Customer from './components/Customer';
import Admin from './components/Admin';
import Add_Product from './components/newAddItems/Add_Product';
import Add_Customer from './components/newAddItems/Add_Customer';
import Add_Order from './components/newAddItems/Add_Order';
import Add_Vendor from './components/newAddItems/Add_Vendor';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Admin/>
          <Switch>
            <Route path="/" exact={true} component={LogIn}/>
            <Route path="/reg" exact={true} component={RegistrationForm}/>
            <Route path="/dashboard" exact={true} component={Dashboard}/>
            <Route path="/dashboard" exact={true} component={Header}/>
            <Route path="/product" exact={true} component={Product}/>
            <Route path="/order" exact={true} component={Order}/>
            <Route path="/vendor" exact={true} component={Vendor}/>
            <Route path="/customer" exact={true} component={Customer}/>
            <Route path="/report" exact={true} component={Report}/>
            <Route path="/addproduct" exact={true} component={Add_Product}/>
            <Route path="/addcustomer" exact={true} component={Add_Customer}/>
            <Route path="/addorder" exact={true} component={Add_Order}/>
            <Route path="/addvendor" exact={true} component={Add_Vendor}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
