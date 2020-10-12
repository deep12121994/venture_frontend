import React, { Component } from 'react';
import './Header.css';
import pic from './logo_with_name.PNG';
import { Redirect } from 'react-router-dom';

export default class Header extends Component {
    state = {
        navigate: false
    };

    logout = () => {
        localStorage.clear("token");
        this.setState({navigate: true});
    };


    render() {
        const {navigate} = this.state;

        if(navigate) {
            return <Redirect to="/" push={true}/>;
        }
        return(
            <div className="main-header">
                <div className="header-logo">
                    <img src={pic} alt="logo" />
                </div>
                <a href="/dashboard"><p>Dashboard</p></a>
                <a href="/product"><p>Product</p></a>
                <a href="/order"><p>Orders</p></a>
                <a href="/customer"><p>Customers</p></a>
                <a href="/vendor"><p>Vendors</p></a>
                <a href="/reports"><p>Reports</p></a> 
                <div className="info"> 
                    <label className="user-name">Username</label>
                    <button className="btn_logout" onClick={this.logout}>Logout</button>
                </div>
            </div>        
        )
    }
}