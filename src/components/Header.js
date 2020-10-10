import React, { Component } from 'react';
import './Header.css';
import pic from './logo_with_name.PNG';

export default class Header extends Component {
    render() {
        return(
            <div className="main-header">
                <div className="header-logo">
                    <img src={pic} alt="logo" />
                </div>
                <a href="/Dashboard"><p>Dashboard</p></a>
                <a href="/Product"><p>Product</p></a>
                <a href="#Orders"><p>Orders</p></a>
                <a href="/user"><p>Users</p></a>
                <a href="/vendor"><p>Vendors</p></a>
                <a href="/Reports"><p>Reports</p></a> 
                <div className="info"> 
                    <label className="user-name">Username</label>
                    <button className="btn_logout">Logout</button>
                </div>
            </div>        
        )
    }
}