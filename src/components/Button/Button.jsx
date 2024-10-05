import React from "react";
import './Button.css';

//using memo to stop the extra rendering if the props are not changed.

const Button = React.memo(({onClick, label})=>{
    return(
        <button className="button" onClick={onClick}>{label}</button>
    );
});

export default Button;