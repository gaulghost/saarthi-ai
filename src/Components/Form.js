import React from 'react';
// import Label from './Label.js'

import { ValidatorForm, TextValidator,SelectValidator} from 'react-material-ui-form-validator';
import { Button} from '@material-ui/core';
import "../Styles/form.css";

import { MenuItem } from '@material-ui/core';


// import Button from './Button'

const Form = (props) => {

    const styleLabels = {
        textAlign: 'center!important',
        width: '70%',
        margin: '7px',
    }

    const buttonStyle = {
        display: 'inline-block',
    	display: 'flex',
    	justifyContent: 'center',
    	alignItems: 'center',
    	padding: '0 20px',
    	minWidth: '160px',
    	height: '50px',
    	backgroundColor: '#57b846',
    	borderRadius: '25px',
    	fontSize: '16px',
    	color: '#fff',
    	lineHeight: '1.2',
    	transition: 'all .4s',
    	margin:'1vh auto 2vh auto',
    }

    return(
        <div className="container-contact100">
            <button className="contact100-form-btn closeform-btn" onClick={props.closeForm}>
                <span>
                    Close Form
                </span>
            </button>
    		<div className="wrap-contact100">
                <div className="contact100-form-title">
                    <span className="contact100-form-title-1">
                        New Employee Form
                    </span>

                    <span className="contact100-form-title-2">
                        Fill the form below to register
                    </span>
                </div>
                <ValidatorForm
                onSubmit={props.clickedSubmit}

            >
                <TextValidator
                    style={styleLabels}
                    label="Name"
                    onChange={props.setValue}
                    name="name"
                    value={props.formData.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <TextValidator
                    style={styleLabels}
                    label="Employee ID"
                    onChange={props.setValue}
                    name="emp_id"
                    value={props.formData.emp_id}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <SelectValidator
                    style={styleLabels}
                    label = "Department"
                    onChange = {props.setValue}
                    value={props.formData.dept}
                    name="dept"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    className=""
                 >
                   <MenuItem value={'Economics'}>Economics</MenuItem>
                   <MenuItem value={'Accounts'}>Accounts</MenuItem>
                   <MenuItem value={'Development'}>Development</MenuItem>
                   <MenuItem value={'Buisness'}>Buisness</MenuItem>
                   <MenuItem value={'Services'}>Services</MenuItem>
                </SelectValidator>
                <TextValidator
                    type="email"
                    style={styleLabels}
                    label="Email"
                    onChange={props.setValue}
                    name="email"
                    value={props.formData.email}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <TextValidator
                    onFocus={(e)=>{e.target.type = 'date'}}
                    style={styleLabels}
                    onBlur={(e)=>{e.target.type = 'text'}}
                    type="text"
                    label="Date of Joining"
                    onChange={props.setValue}
                    name="doj"
                    value={props.formData.doj}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <div className="container-contact100-form-btn">
                <Button style={buttonStyle} type="submit">Submit</Button>
                <Button style={buttonStyle} onClick = {props.clickedClear}>Clear</Button>
                </div>
            </ValidatorForm>
            </div>
        </div>
    )
}

export default Form;
