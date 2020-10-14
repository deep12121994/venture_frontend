import React, { Component } from 'react';
import axios from 'axios';
import './Add_Vendor.css';

export default class Add_Product extends Component {
    state={
        Company_Name:"",
        Contact_Person:"",
        Contact_Number:"",
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
        if(this.state.Company_Name) {
            this.props.showError(null);
            const payload = {
                'c_name':this.state.Company_Name,
                'email': this.state.Contact_Person,
                'phone': this.state.Contact_Number,
            }
            axios.post(+'vendor',payload)
            .then((res) => {
                if(res.data.code === 200) {
                    this.setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Vendor Added successfully!!'
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
                <div className="vendor-form">
                    <form  onSubmit={this.handleSubmit}>
                        <div className="vendor-form-header">Add Vendor</div> 
                        <div className="vendor-form-ip">
                            <div className="vendor-details">
                                <label className="vendor-label">Company Name</label>
                                <input type="text" className="vendor-form-control" placeholder="Enter vendor name" 
                                     onChange={event=> this.setState({Company_Name: event.target.value})}/>
                            </div>

                            <div className="vendor-details">
                                <label className="vendor-label">Contact Person Name</label>
                                <input type="text" className="vendor-form-control" placeholder="Enter vendor person name"  
                                    onChange={event=> this.setState({Contact_Person: event.target.value})}/>
                            </div>

                            <div className="vendor-details">
                                <label className="vendor-label">Phone</label>
                                <input type="text" className="vendor-form-control" placeholder="Enter phone number"  
                                    onChange={event=> this.setState({Contact_Number: event.target.value})}/>
                            </div>
                        </div>
                        <button type="submit" className="add-button" >Add vendor</button>
                    </form>
                </div>
            </div>
        )
    }
}