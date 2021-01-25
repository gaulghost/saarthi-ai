import React from 'react';
import Label from './Label.js'
import { ValidatorForm, TextValidator,SelectValidator} from 'react-material-ui-form-validator';
import { Button} from '@material-ui/core';
import { MenuItem } from '@material-ui/core';


// import Button from './Button'
import "../Styles/form.css";

const Form = (props) => {

    // const styleForm = {
    //     backgroundColor: 'rgba(255,255,255,1)',
    //     font: 'inherit',
    //     padding: '30px',
    //     margin: '30px auto',
    //     fontSize: '18px',
    //     width: '80vw'
    // }

    // const styleLabels = {
    //     textAlign: 'left',
    // }

    return(
        /*<form style={styleForm}>
            <div style={styleLabels}>
                <Label name='name' content="Name" type="text" placeholder="Full Name" value={props.formData.name} onChange={props.setValue}/>
                <Label name='emp_id' content="Employee ID" type="text" placeholder="Alloted ID" value={props.formData.emp_id} onChange={props.setValue}/>
                <Label name='dept' content="Department" type="text" placeholder="Dept. you are working in" value={props.formData.dept} onChange={props.setValue}/>
                <Label name='email' content="Email ID" type="email" placeholder="Registered Email ID" value={props.formData.email} onChange={props.setValue}/>
                <Label name='doj' content="Date of Joining" type="date" placeholder="Joining Date" value={props.formData.doj} onChange={props.setValue}/>
            </div>
            <Button clicked={(e)=>{props.clickedSubmit(e)}} name="Submit"/>
            <Button clicked={props.clickedClear} name="Clear"/>
        </form>*/
        <div class="container-contact100">
            <button className="contact100-form-btn closeform-btn" onClick={props.closeForm}>
                <span>
                    Close Form
                </span>
            </button>
    		<div class="wrap-contact100">
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
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Name"
                    onChange={props.setValue}
                    name="name"
                    value={props.formData.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <TextValidator
                    label="Employee ID"
                    onChange={props.setValue}
                    name="emp_id"
                    value={props.formData.emp_id}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <SelectValidator
                label = "Department"
                    onChange = {props.setValue}
                   
                   value={props.formData.dept}
                   name="dept"
                   validators={["required"]}
                   errorMessages={["this field is required"]}
                   className=""
                 >
                   <MenuItem value={10}>Ten</MenuItem>
                   <MenuItem value={20}>Twenty</MenuItem>
                   <MenuItem value={30}>Thirty</MenuItem>
         </SelectValidator>
                <TextValidator
                    label="Email"
                    onChange={props.setValue}
                    name="email"
                    value={props.formData.email}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <TextValidator
                    label="Date of Joining"
                    onChange={props.setValue}
                    name="doj"
                    value={props.formData.doj}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm>
                 {/*<form className="contact100-form validate-form">
                    <Label name='name' content="Name" type="text" placeholder="Full Name" value={props.formData.name} onChange={props.setValue}/>
                    <Label name='emp_id' content="Employee ID" type="text" placeholder="Alloted ID" value={props.formData.emp_id} onChange={props.setValue}/>
                    <div className="wrap-input100x validate-input" data-validate = "Select your Department">
        				<div className="label-input100">Department</div>
        				<div>
        					<select className="js-select2" name='dept' value={props.formData.dept} onChange={props.setValue}>
        						<option>Choose one</option>
        						<option>UI/UX Design</option>
        						<option>eCommerce Bussiness</option>
        						<option>Online Services</option>
        					</select>
        					<div className="dropDownSelect2"></div>
        				</div>
        				<span className="focus-input100"></span>
        			</div>
                    <Label name='email' content="Email ID" type="email" placeholder="Registered Email ID" value={props.formData.email} onChange={props.setValue}/>
                    <Label name='doj' content="Date of Joining" type="date" placeholder="Joining Date" value={props.formData.doj} onChange={props.setValue}/>
                    <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn" onClick={(e)=>{props.clickedSubmit(e)}}>
                            <span>
                                Submit
                                <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                            </span>
                        </button>
                        <button className="contact100-form-btn" onClick={props.clickedClear}>
                            <span>
                                Clear
                                <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>*/}
            </div>
        </div>
    )
}

export default Form;
