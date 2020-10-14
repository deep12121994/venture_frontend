import React, { Component } from 'react';
import axios from 'axios';
import './Add_Customer.css';

export default class Add_Product extends Component {
    state={
        Customer_Name:"",
        Email:"",
        Phone:"",
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
        if(this.state.Customer_Name) {
            this.props.showError(null);
            const payload = {
                'c_name':this.state.Customer_Name,
                'email': this.state.Email,
                'phone': this.state.Phone,
            }
            axios.post(+'customer',payload)
            .then((res) => {
                if(res.data.code === 200) {
                    this.setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Customer Added successfully!!'
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
                <div className="customer-form">
                    <form  onSubmit={this.handleSubmit}>
                        <div className="customer-form-header">Add Customer</div> 
                        <div className="customer-form-ip">
                            <div className="customer-details">
                                <label className="customer-label">Customer_Name</label>
                                <input type="text" className="customer-form-control" placeholder="Enter customer Name" 
                                     onChange={event=> this.setState({Customer_Name: event.target.value})}/>
                            </div>

                            <div className="customer-details">
                                <label className="customer-label">Email</label>
                                <input type="text" className="customer-form-control" placeholder="Enter customer email"  
                                    onChange={event=> this.setState({Email: event.target.value})}/>
                            </div>

                            <div className="customer-details">
                                <label className="customer-label">Phone</label>
                                <input type="text" className="customer-form-control" placeholder="Enter phone"  
                                    onChange={event=> this.setState({Phone: event.target.value})}/>
                            </div>
                        </div>
                        <button type="submit" className="add-button" >Add Customer</button>
                    </form>
                </div>
            </div>
        )
    }
}