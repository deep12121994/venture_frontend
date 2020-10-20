import React, {Component} from 'react';
import './Order_Table.css'

export default class Order_Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            orders: [
            {Order_ID:1, Customer_Name: "Deep", Customer_Number: "7045639810",
                 Order_Type: "Purchase",Quantity:2, Total_Amount:500, Paid:"Yes", Paid_Amount:500, Discount:0, Date:12-12-1212 },
            {Order_ID:1, Customer_Name: "Deep", Customer_Number: "7045639810", 
                Order_Type: "Purchase", Quantity:2,Total_Amount:500, Paid:"Yes", Paid_Amount:500, Discount:0, Date:12-12-1212 },
            {Order_ID:1, Customer_Name: "Deep",Date:"Nike", Customer_Number: "7045639810", 
                Order_Type: "Purchase", Quantity:2, Total_Amount:500, Paid:"Yes", Paid_Amount:500, Discount:0, Date:12-12-1212 },
             
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.orders[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    renderTableData() {
        return this.state.orders.map((orders, index) => {
           const {Order_ID, Customer_Name, Customer_Number, Order_Type,Quantity, Total_Amount, Paid, Paid_Amount, Discount, Date} = orders //destructuring
           return (
              <tr key={Order_ID}>
                <td>{Order_ID}</td>
                <td>{Customer_Name}</td>
                <td>{Customer_Number}</td>
                <td>{Order_Type}</td>
                <td>{Quantity}</td>
                <td>{Total_Amount}</td> 
                <td>{Paid}</td>
                <td>{Paid_Amount}</td>
                <td>{Discount}</td>
                <td>{Date}</td>     
              </tr>
           )
        })
     }

    render() {
        return(
            <div>
                <table id='orders'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
                </table>
            </div>
        );
    }
}