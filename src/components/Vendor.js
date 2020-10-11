import React, { Component } from 'react';
import './Vendor.css';
import VendorTable from './Vendor_Table';
import Header from './Header';

export default class Vendor extends Component {
    render() {
        return(
            <div className="vendor-main-container">
                <div className="vendor-container">
                    <Header/>
                        <div className="vendor-sub-header">
                            <div className="vendor-search">
                                <form>
                                    <label className="vendor-label">Vendor</label>
                                    <input type="text" placeholder="Search.."/>
                                </form>
                            </div>
                            <div className="vendor-staus">
                                <form>
                                    <label className="vendor-label">Status</label>
                                    <input type="text" placeholder="All"/>
                                </form>
                            </div>
                        </div>
                        <div className="vendor-info">
                            <VendorTable/>
                        </div>
                </div>
                
            </div>
        )
    }
}