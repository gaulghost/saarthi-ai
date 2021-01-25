import React from 'react';
import TableRow from './TableRow'
import "../Styles/table.css"

const Table = (props) => {
    const styleTable = {
        width:'100%',
        height: '100%',
    	borderCollapse: 'collapse',
    	overflow: 'hidden',
    	boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    }

    const styleTbody = {
        // backgroundColor: 'rgba(0,0,0,0.2)',
        // minHeight: '20vh',
        // maxHeight: '70vh'
    }

    const styleThead = {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: '5px 5px',
    }

    const styleTh = {
        padding: '15px',
    	backgroundColor: '#55608f',
    	color: '#fff',
    }

    const styleOuter = {
        margin: '0 auto',
        marginTop: '30vh',
        minWidth: '276px',
        width: '70vw',
        maxHeight: '50vh',
        overflow: 'auto'
    }

    return(
        <div style={styleOuter} id="style-1">
        <table style={styleTable}>
            <thead style = {styleThead}>
                <tr>
                    <th style = {styleTh}>Name</th>
                    <th style = {styleTh}>Employee ID</th>
                    <th style = {styleTh}>Department</th>
                    <th style = {styleTh}>Email ID</th>
                    <th style = {styleTh}>Date of Joining</th>
                    <th style = {styleTh}>Delete Entry</th>
                </tr>
            </thead>
            <tbody style = {styleTbody}>
                {props.formData.map(form=>{
                    return(
                        <TableRow id = {form.emp_id} name={form.name} emp_id={form.emp_id} dept={form.dept} email={form.email} doj={form.doj} onClick = {()=>props.deleteRow(form.emp_id)}/>
                )})}
            </tbody>
        </table>
        </div>
    )
}

export default Table;
