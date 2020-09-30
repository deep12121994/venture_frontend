import React, {Component} from 'react';
import './Vendor_Table.css'

export default class Order_Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            vendors: [
            {Vendor_ID:1, Company_Name:"Nike", Contact_Person:"Nike", Date:29 },
            {Vendor_ID:2, Company_Name:"Nike", Contact_Person:"Nike", Date:29 },
            {Vendor_ID:3, Company_Name:"Nike", Contact_Person:"Nike", Date:29 },
             
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.vendors[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    renderTableData() {
        return this.state.vendors.map((vendors, index) => {
           const {Vendor_ID,Company_Name, Contact_Person, Date} = vendors //destructuring
           return (
              <tr key={Vendor_ID}>
                <td>{Vendor_ID}</td>
                <td>{Company_Name}</td>
                <td>{Contact_Person}</td>
                <td>{Date}</td>     
              </tr>
           )
        })
     }

    render() {
        return(
            <div>
                <table id='vendors'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
                </table>
            </div>
        );
    }
}