import React from 'react';
import "../Styles/form.css";

const Label = (props) => {

    // const styleLabel = {
    //     font: 'inherit',
    //     fontSize: '18px',
    //     margin:'0px 15px',
    //     width: '100%'
    // }
    // const styleInput = {
    //     font: 'inherit',
    //     fontSize: '15px',
    //     margin:'0px 15px',
    //     width: '100%'
    // }
    // const styleDiv = {
    //     padding: '5px',
    // }
    // const styleInnerDiv1 = {
    //     display: 'inline-block',
    //     width: '20%'
    // }
    // const styleInnerDiv2 = {
    //     display: 'inline-block',
    //     width: '60%'
    // }

    // const styleWrap = {
    //     width: 100%;
    //     position: relative;
    //     border-bottom: 1px solid #b2b2b2;
    //     margin-bottom: 26px;
    // }
    // const styleLabel = {
    //     font-family: Poppins-Regular;
    //     font-size: 15px;
    //     color: #808080;
    //     line-height: 1.2;
    //     text-align: right;
    //     position: absolute;
    //     top: 14px;
    //     left: -105px;
    //     width: 80px;
    // }

    return(
        /*<div style={styleDiv}>
            <div style={styleInnerDiv1}>
                <label style={styleLabel}>{props.content}</label>
            </div>
            <div style={styleInnerDiv2}>
                <input style={styleInput} type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChange}></input>
            </div>
        </div>*/
        <div className="wrap-input100 validate-input"  data-validate={props.validate}>
            <span className="label-input100">{props.content}</span>
            <input className="input100" type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange}></input>
            <span className="focus-input100"></span>
        </div>
    )
}

export default Label;
