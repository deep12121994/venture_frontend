import React, { Component } from "react";
import axios from "axios";
import './form.css';
import HomePage from './HomePage';
import { Redirect } from 'react-router-dom';


export default class LogIn extends Component {
    
    constructor(props){
        super(props);
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if(token == null) {
            loggedIn = false;
        }

        this.state = {
            email: "",
            password: "",
            loggedIn: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password} = this.state;
        /*axios.post(
                //"http://localhost:4000/user/login",
                {
                    email: email,
                    password: password
                }
                //{withCredentials: true}
            )
            .then(response =>{
                if(response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(err => {
                console.log("login error", err);
            });*/
        event.preventDefault();
        if(email==="deep@gmail.com" && password==="deep124"){
            localStorage.setItem("token","dhakjfgksjdgfvb");
            this.setState({
                loggedIn:true
            })
        }
    }

    redirectToRegistration(){
        //this.props.history.push('/registration');
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
    }
    renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to='/reg' />
        }
    }

    render(){
        if(this.state.loggedIn){
            return <Redirect to="/Dashboard"/>
        }
        return(
            <div className="App">
            <HomePage/>
            {this.renderRedirect()}
            <form className="form-main" onSubmit={this.handleSubmit}>
                    <div className="form-header">Log In</div>
                    <div className="form-ip">
                        <div className="form-group">
                            <label className="form-label">User name</label>
                            <input type="email" className="form-control" placeholder="Enter name" onChange={event=> this.setState({email: event.target.value})} />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={event=> this.setState({password: event.target.value})} /> 
                        </div>
                    </div>
                    
                    <button type="submit" className="btn_login">Log In</button>
                    <p className="forgot-password text-right">
                        <span onClick={this.setRedirect}>New User?</span>
                    </p>
                </form>

            </div>
        )
    }
}