import React, {Component} from 'react';
import './User_Table.css'

export default class User_Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [
            {User_ID:1, User_Name:"deep", DOB:50, Phone_Number:9999988888,
             Email:"deep@gmail.com", Password:"deep123", Date:29 },
            {User_ID:2, User_Name:"parth", DOB:50, Phone_Number:9999988888,
                Email:"deep@gmail.com", Password:"deep123", Date:29 },
            {User_ID:3, User_Name:"deep", DOB:50, Phone_Number:9999988888,
                Email:"deep@gmail.com", Password:"deep123", Date:29 },
             
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.users[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    renderTableData() {
        return this.state.users.map((users, index) => {
           const {User_ID,User_Name, DOB, Phone_Number, Email, Password, Date} = users //destructuring
           return (
              <tr key={User_ID}>
                <td>{User_ID}</td>
                <td>{User_Name}</td>
                <td>{DOB}</td>
                <td>{Phone_Number}</td>
                <td>{Email}</td>
                <td>{Password}</td>
                <td>{Date}</td>     
              </tr>
           )
        })
     }

    render() {
        return(
            <div>
                <table id='users'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
                </table>
            </div>
        );
    }
}