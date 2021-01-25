import React from 'react';
import "../Styles/form.css"

const Button = (props) => {
    const styleButton = {
        margin:'5vh auto'
        // backgroundColor: 'rgba(255,255,255,1)',
        // font: 'inherit',
        // border: '1px solid blue',
        // padding: '8px 15px',
        // cursor: 'pointer',
        // margin: '30px',
        // fontSize: '18px'
    };

    return(
        <button style={styleButton} onClick={props.clicked} className="contact100-form-btn">{props.name}</button>
    )
}
export default Button;
