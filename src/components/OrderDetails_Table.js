import React, {Component} from 'react';
import './OrderDetails_Table.css'

export default class OrderDetails_Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            orderdetails: [
                {Brand:"", Product_Name: "", Amount: "", Quantity:0, Discount:0, Total_Amount:0},
               
             
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.orderdetails[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    renderTableData() {
        return this.state.orderdetails.map((orderdetails, index) => {
           const {Brand,Product_Name, Amount, Quantity, Discount, Total_Amount} = orderdetails //destructuring
           return (
              <tr>
                <td><input type="text" /></td>
                <td><input type="text"/></td>
                <td><input type="text" disabled /></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text" disabled/></td>    
              </tr>
           )
        })
     }

    render() {
        return(
            <div>
                <table id='orderdetails'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
                </table>
            </div>
        );
    }
}