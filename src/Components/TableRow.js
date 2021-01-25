import React from 'react';
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../fonts/Linearicons-Free-v1.0.0/icon-font.min.css"
// import "../fonts/font-awesome-5.15.2/css/fontawesome.min.css"
import "../Styles/table.css"

const TableRow = (props) => {

    const styleTd = {
        padding: '15px',
    	backgroundColor: 'rgba(255,255,255,0.2)',
    	color: '#fff',
    }

    return(
        <tr key = {props.id}>
            <td style={styleTd}>{props.name}</td>
            <td style={styleTd}>{props.emp_id}</td>
            <td style={styleTd}>{props.dept}</td>
            <td style={styleTd}>{props.email}</td>
            <td style={styleTd}>{props.doj}</td>
            <td style={styleTd} onClick = {props.onClick}><i className="fa fa-trash"></i></td>
        </tr>
    )
}

export default TableRow;
