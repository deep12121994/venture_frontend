import React, { Component } from 'react';
import './Order.css';
import OrderDetails from './OrderDetails_Table';
import Header from './Header';

export default class Order extends Component {
    render() {
        return(
            <div className="order-main-container">
                <div className="order-container">
                    <Header/>
                        <div className="order-sub-header">
                            <div className="order-search">
                                <form>
                                    <label className="order-label">In Stock</label>
                                    <input type="text" placeholder="Search.."/>
                                </form>
                            </div>
                            <div className="order-staus">
                                <form>
                                    <label className="order-label">Status</label>
                                    <input type="text" placeholder="All"/>
                                </form>
                            </div>
                        </div>
                        <div className="order-info">
                            <OrderDetails/>
                        </div>
                </div>
                
            </div>
        )
    }
}