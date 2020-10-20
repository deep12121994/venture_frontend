import React, { Component } from 'react';
import axios from 'axios';
import './Add_Order.css';
import OrderDetails_Table from '../OrderDetails_Table';

export default class Add_Order extends Component {
    state={
        Customer_Name:"",
        Customer_Number:"",
        Order_Type:"",
        Quantity:"",
        Total_Amount:"",
        Paid:"",
        Paid_Amount:"",
        Discount:"",
        Date: "",
        Order_Details: [],
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
                'c_number': this.state.Customer_Number,
                'ordr_type': this.state.Order_Type,
                'quantity': this.state.Quantity,
                'total_amnt': this.state.Total_Amount,
                'paid': this.state.Paid,
                'paid_amnt': this.state.Paid_Amount,
                'discount': this.state.Discount,
                'order_detls': this.state.Order_Details,
            }
            axios.post(+'order',payload)
            .then((res) => {
                if(res.data.code === 200) {
                    this.setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Order Added successfully!!'
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
                <div className="order-form">
                    <form  onSubmit={this.handleSubmit}>
                        <div className="order-form-header">Add Order</div> 
                        <div><button type="submit" className="submit-order-button" >Add Order</button></div>
                        <div className="order-form-ip">
                            <table>
                                <tr>
                                    <th>Customer Name</th>
                                    <th>Customer Number</th>
                                    <th>Order Type</th>
                                </tr>

                                <tr>
                                    <td><input type="text" onChange={event=> this.setState({Customer_Name: event.target.value})}/></td>
                                    <td><input type="text" onChange={event=> this.setState({Customer_Number: event.target.value})}/></td>
                                    <td><input type="text" onChange={event=> this.setState({Order_Type: event.target.value})}/></td>
                                </tr>
                                
                            </table>
                        </div>
                       
                        <div>
                            <div className="order-details">
                                <OrderDetails_Table/>
                            </div>

                            <div className="order-sum">
                            <table>
                                <tr>
                                    <th>Discount</th>
                                    <td><input type="text" onChange={event=> this.setState({Discount: event.target.value})}/></td>
                                </tr>
                                <tr>
                                    <th>Paid</th>
                                    <td><input type="text" onChange={event=> this.setState({Paid: event.target.value})}/></td>
                                </tr>
                                <tr>
                                    <th>Paid Amount</th>
                                    <td><input type="text" onChange={event=> this.setState({Paid_Amount: event.target.value})}/></td>
                                </tr>
                                <tr>
                                    <th>Total Amount</th>
                                    <td><input type="text" onChange={event=> this.setState({Total_Amount: event.target.value})} disabled/></td>
                                </tr>   
                                
                            </table>
                        </div>
                        </div>
                       
                    </form>
                </div>
            </div>
        )
    }
}