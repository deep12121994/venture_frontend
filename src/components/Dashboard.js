import React, { Component } from 'react';
import './Dashboard.css';
import Header from './Header';


export default class Dashboard extends Component
{
    render(){
        return(
            <div>
                <div className="main-dash-container">
                    <Header/>
                    <div className="sub-dash-container">
                        <div className="sub-container-inside">
                            <div className="dash-update">
                                <div>Daily/Monthly/FDTD/Yearly</div>
                            </div>
                            <div className="dash-list">
                                <div className="dash-list-info">Profit</div>
                                <div className="dash-list-info">Loss</div>
                                <div className="dash-list-info">Income</div>
                                <div className="dash-list-info">Purchase</div>
                            </div>
                        </div>
                        <div className="add-contents">
                            <div className="sub-add-contents">
                                <button className="add_btn" type="button" onClick={event =>  window.location.href='/addcustomer'}>Add Customer</button>
                            </div>
                            <div className="sub-add-contents">
                                <button className="add_btn" type="button" onClick={event =>  window.location.href='/addproduct'}>Add Product</button>
                            </div>
                            <div className="sub-add-contents">
                                <button className="add_btn" type="button" onClick={event =>  window.location.href='/addorder'}>Add Order</button>  
                            </div>
                            <div className="sub-add-contents">
                                <button className="add_btn" type="button" onClick={event =>  window.location.href='/addvendor'}>Add Vendor</button> 
                            </div>
                        </div>
                        <div className="dash-cal">
                            <div className="dash-total">Calculation</div>
                            <div className="dash-chart">Chart Display</div>
                        </div>
                    </div>     
                </div>
            </div>
        )
    }
}