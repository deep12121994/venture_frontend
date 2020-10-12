import React, { Component } from 'react';
import axios from 'axios';
import './Add_Product.css';

export default class Add_Product extends Component {
    state={
        Product_Name:"",
        Brand:"",
        Price:"",
        Discount:"",
        Quantity:"",
        Product_Weight:"",
        Manufactured_Date: "",
        Expired_Date: "",
        Date: "",
        redirect: false,
        successMessage:null
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    sendDetailsToServer() {
        if(this.state.Product_Name) {
            this.props.showError(null);
            const payload = {
                'p_name':this.state.Product_Name,
                'brand': this.state.Brand,
                'price': this.state.Price,
                'discount': this.state.Discount,
                'quantity': this.state.Quantity,
                'product_weigth': this.state.Product_Weight,
                'manf_date': this.state.Manufactured_Date,
                'exp_date' :  this.state.Expired_Date
            }
            axios.post(+'product',payload)
            .then((res) => {
                if(res.data.code === 200) {
                    this.setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Product Added successfully!!'
                    }))
                    this.props.showError(null)
                } else {
                    this.props.showError('Some error occured');
                }
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            this.props.showError('Please enter valid data');
        }
    }

    render() {
        return(
            <div className="App">
                <div className="product-form">
                    <form  onSubmit={this.handleSubmit}>
                        <div className="product-form-header">Add Product</div> 
                        <div className="product-form-ip">
                            <div className="product-details">
                                <label className="product-label">Product_Name</label>
                                <input type="text" className="product-form-control" placeholder="Enter product Name" 
                                     onChange={event=> this.setState({Product_Name: event.target.value})}/>
                            </div>

                            <div className="product-details">
                                <label className="product-label">Brand</label>
                                <input type="text" className="product-form-control" placeholder="Enter product brand"  
                                    onChange={event=> this.setState({Brand: event.target.value})}/>
                            </div>

                            <div className="product-details">
                                <label className="product-label">Price</label>
                                <input type="text" className="product-form-control" placeholder="Enter price"  
                                    onChange={event=> this.setState({Price: event.target.value})}/>
                            </div>

                            <div className="product-details">
                                <label className="product-label">Discount</label>
                                <input type="text" className="product-form-control" placeholder="Enter discount"  
                                    onChange={event=> this.setState({Discount: event.target.value})}/>
                            </div>

                            <div className="product-details">
                                <label className="product-label">Quantity</label>
                                <input type="text" className="product-form-control" placeholder="Enter quantity"  
                                    onChange={event=> this.setState({Quantity: event.target.value})}/>
                            </div>

                            <div className="product-details">
                                <label className="product-label">Product_Weight</label>
                                <input type="text" className="product-form-control" placeholder="Enter product weight" 
                                     onChange={event=> this.setState({Product_Weight: event.target.value})}/>
                            </div>

                            <div className="product-details">
                                <label className="product-label">Manufactured_Date</label>
                                <input type="text" className="product-form-control" placeholder="Enter manufactured date" 
                                     onChange={event=> this.setState({Manufactured_Date: event.target.value})}/>
                            </div>

                            <div className="product-details">
                                <label className="product-label">Expired_Date</label>
                                <input type="text" className="product-form-control" placeholder="Enter expired date" 
                                     onChange={event=> this.setState({Expired_Date: event.target.value})}/>
                            </div>
                        </div>
                        <button type="submit" className="add-button" >Add Product</button>
                    </form>
                </div>
            </div>
        )
    }
}