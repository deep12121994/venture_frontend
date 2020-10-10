import React, {Component} from 'react';
import Header from './Header';
import UserTable from './User_Table';
import './User.css'

export default class User extends Component {
    render() {
        return(
            <div className="user-container">
                <div className="user-main-container">
                    <Header/>
                    <div className="user-tab-container">
                        <UserTable/>
                    </div>
                </div>
                   
            </div>
        )
    }
}