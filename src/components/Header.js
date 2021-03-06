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
                <a className="navbar_menu" href="/dashboard"><p>Dashboard</p></a>
                <a  className="navbar_menu" href="/customer"><p>Customers</p></a>
                <a className="navbar_menu" href="/product"><p>Product</p></a>
                <a className="navbar_menu" href="/order"><p>Orders</p></a>  
                <a className="navbar_menu" href="/vendor"><p>Vendors</p></a>
                <a className="navbar_menu" href="/reports"><p>Reports</p></a> 
                <div className="info"> 
                    <label className="user-name">Username</label>
                    <button className="btn_logout" onClick={this.logout}>Logout</button>
                </div>
            </div>        
        )
    }
}