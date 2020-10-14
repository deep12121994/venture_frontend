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
                                <label className="dash-label">Customer</label>
                                <button className="add_btn" type="button" onClick={event =>  window.location.href='/addcustomer'}>+</button>      
                            </div>
                            <div className="sub-add-contents">
                                <label className="dash-label" id="pro_id">Product</label>
                                <button className="add_btn" type="button" onClick={event =>  window.location.href='/addproduct'}>+</button>      
                            </div>
                            <div className="sub-add-contents">
                                <label className="dash-label" id="ord_id">Order</label>
                                <button className="add_btn" type="button" onClick={event =>  window.location.href='/addorder'}>+</button>
                            </div>
                            <div className="sub-add-contents">
                                <label className="dash-label" id="vndr_id">Vendor</label>
                                <button className="add_btn" type="button" onClick={event =>  window.location.href='/addvendor'}>+</button>
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