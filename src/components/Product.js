import React, { Component } from 'react';
import './product.css';
import ProductTable from './Product_Table';
import Header from './Header';
import { Redirect } from "react-router-dom";

export default class Product extends Component {
   

    render() {
        return(
            <div className="container">
                <div className="main-container">
                    <Header/>
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
                            <ProductTable/>
                        </div>
                </div>
                
            </div>
        )
    }
}