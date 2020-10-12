import React, {Component} from 'react';
import Header from './Header';
import CustomerTable from './Customer_Table';
import './Customer.css'

export default class Customer extends Component {
    render() {
        return(
            <div className="customer-container">
                <div className="customer-main-container">
                    <Header/>
                        <div className="customer-sub-header">
                            <div className="customer-search">
                                <form>
                                    <label className="customer-label">User</label>
                                    <input type="text" placeholder="Search.."/>
                                </form>
                            </div>
                            <div className="customer-staus">
                                <form>
                                    <label className="customer-label">Status</label>
                                    <input type="text" placeholder="All"/>
                                </form>
                            </div>
                        </div>
                        <div className="customer-info">
                            <CustomerTable/>
                        </div>
                </div>
                
            </div>
        )
    }
}