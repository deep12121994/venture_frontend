import React,{Component} from 'react';
import './form.css';
import HomePage from './HomePage';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class RegistrationForm extends Component {
    state={
        First_Name:"",
        Last_Name:"",
        DOB:"",
        Email:"",
        Phone:"",
        Password:"",
        ConfirmPassword: "",
        redirect: false,
        successMessage:null
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    sendDetailsToServer() {
        if(this.state.Email.length && this.state.Password.length) {
            this.props.showError(null);
            const payload = {
                'f_name':this.state.First_Name,
                'l_name': this.state.Last_Name,
                'DOB': this.state.DOB,
                'email': this.state.email,
                'phone': this.state.Phone,
                'password': this.state.password,
            }
            axios.post(+'register',payload)
            .then((res) => {
                if(res.data.code === 200) {
                    this.setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Registration successful'
                    }))
                   // localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    //redirectToHome();
                    this.props.showError(null)
                } else {
                    this.props.showError('Some error occured');
                }
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            this.props.showError('Please enter valid username and password')
        }
    }

    redirectToHome(){
        //this.props.updateTitle('Home')
        //this.props.history.push('/home');
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
    }
    renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to='/' />
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.password === this.state.confirmPAssword) {
            this.sendDetailsToServer()
        }  else {
            this.props.showError('Passwords do not match');
        }
    }
    render() {
        return(
            <div className="App">
                <HomePage/>
                <div className="form-main">
                 {this.renderRedirect()}
                    <form  onSubmit={this.handleSubmit}>
                        <div className="form-header">Registration</div>  
                        <div className="form-ip">
                            <div className="form-group">
                                <label className="form-label">First_Name</label>
                                <input type="text" className="form-control" placeholder="Enter First Name"  onChange={event=> this.setState({First_Name: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Last_Name</label>
                                <input type="text" className="form-control" placeholder="Enter Last Name"  onChange={event=> this.setState({Last_Name: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">DOB</label> 
                                <input type="text" className="form-control" placeholder="Enter DOB"  onChange={event=> this.setState({DOB: event.target.value})}/>
                            </div>
                            <div className="form-group"> 
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Enter Email"  onChange={event=> this.setState({Email: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input type="text" className="form-control" placeholder="Enter Phone Number"  onChange={event=> this.setState({Phone: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Enter Password"  onChange={event=> this.setState({Password: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Enter Confirm Password"  onChange={event=> this.setState({ConfirmPassword: event.target.value})}/>
                            </div>   
                        </div>  
                        <button type="submit" className="button" >Register</button>
                        
                    
                        <div style={{display: this.state.successMessage ? 'block' : 'none'}} role="alert">
                            {this.state.successMessage}
                        </div>

                        <p className="forgot-password text-right">
                            <span onClick={this.setRedirect}>Already have an account?</span>
                        </p>

                    </form>
                </div>
            </div>
        )
    }
}