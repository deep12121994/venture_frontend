import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm';
import LogIn from './components/LogIn';
import Admin from './components/Admin';
import Logout from './components/Logout'
import Product from './components/Product';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import UserTable from './components/User_Table';
import OrderDetailsTable from './components/OrderDetails_Table';
import VendorTable from './components/Vendor_Table';
import Report from './components/Report';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact={true} component={LogIn}/>
            <Route path="/admin" exact={true} component={Admin}/>
            <Route path="/logout" exact={true} component={Logout} />
            <Route path="/Reg" exact={true} component={RegistrationForm}/>
            <Route path="/Dashboard" exact={true} component={Header}/>
            <Route path="/product" exact={true} component={Product}/>
            <Route path="/order" exact={true} component={OrderDetailsTable}/>
            <Route path="/vendor" exact={true} component={VendorTable}/>
            <Route path="/user" exact={true} component={UserTable}/>
            <Route path="report" exact={true} component={Report}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
