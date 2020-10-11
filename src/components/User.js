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
                        <div className="user-sub-header">
                            <div className="user-search">
                                <form>
                                    <label className="user-label">User</label>
                                    <input type="text" placeholder="Search.."/>
                                </form>
                            </div>
                            <div className="user-staus">
                                <form>
                                    <label className="user-label">Status</label>
                                    <input type="text" placeholder="All"/>
                                </form>
                            </div>
                        </div>
                        <div className="user-info">
                            <UserTable/>
                        </div>
                </div>
                
            </div>
        )
    }
}