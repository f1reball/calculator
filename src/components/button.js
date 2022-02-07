import React, { useContext } from "react";

import './button.css'

function Button(props) {

    return(
        <div className="test">
            <button onClick={() => props.stateParser(props.value)}>{props.value}</button>
        </div>
    );
}
export default Button;