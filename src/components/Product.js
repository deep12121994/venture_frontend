import React, { Component } from 'react';
import './Product_Table';
import './product.css';
import Product_Table from './Product_Table';
import Header from './Header';

export default class Product extends Component {
    render() {
        return(
            <div className="container">
                <Header/>
                <div className="main-container">
                        <div className="sub-header">
                            <div className="stock-search">
                                <form>
                                    <label className="product-label">In Stock</label>
                                    <input type="text" placeholder="Search.."/>
                                </form>
                            </div>
                            <div className="staus">
                                <form>
                                    <label className="product-label">Status</label>
                                    <input type="text" placeholder="All"/>
                                </form>
                            </div>
                        </div>
                        <div className="product-info">
                            <Product_Table/>
                        </div>
                </div>
                
            </div>
        )
    }
}