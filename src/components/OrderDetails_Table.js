import React, {Component} from 'react';
import './OrderDetails_Table.css'

export default class Order_Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            orders: [
            {Product_ID:1, Product_Name:"Nike", Brand:"Nike", Price:50, Discount:0,
             Quantity:2,  Product_Weight: 2,Manufactured_Date:12, Expired_Date:12, Date:29 },
            {Product_ID:1, Product_Name:"Nike", Brand:"Nike", Price:50, Discount:0,
                Quantity:2,  Product_Weight: 2,Manufactured_Date:12, Expired_Date:12, Date:29 },
            {Product_ID:1, Product_Name:"Nike", Brand:"Nike", Price:50, Discount:0,
                Quantity:2,  Product_Weight: 2,Manufactured_Date:12, Expired_Date:12, Date:29 },
             
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
        return this.state.orders.map((products, index) => {
           const {Product_ID,Product_Name, Brand, Price, Discount, Quantity, Product_Weight, Manufactured_Date, Expired_Date, Date} = products //destructuring
           return (
              <tr key={Product_ID}>
                <td>{Product_ID}</td>
                <td>{Product_Name}</td>
                <td>{Brand}</td>
                <td>{Price}</td>
                <td>{Discount}</td>
                <td>{Quantity}</td>
                <td>{Product_Weight}</td> 
                <td>{Manufactured_Date}</td>
                <td>{Expired_Date}</td>
                <td>{Date}</td>     
              </tr>
           )
        })
     }

    render() {
        return(
            <div>
                <table id='datas'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
                </table>
            </div>
        );
    }
}