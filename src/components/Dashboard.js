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
                        <div className="dash-update">Daily/Monthly/FDTD/Yearly</div>
                        <div className="dash-list">
                            <div className="dash-list-info">Profit</div>
                            <div className="dash-list-info">Loss</div>
                            <div className="dash-list-info">Income</div>
                            <div className="dash-list-info">Purchase</div>
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