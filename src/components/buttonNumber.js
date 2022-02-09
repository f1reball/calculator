import React from "react";

import './button.css'

function Button(props) {

    function process() {
        if(props.value === 0) {
            props.stateParser(props.n);
        } else {
            props.stateParser((props.value*10)+(props.n));
        }
    }

    return (
        <div>
            <button className={"test"} onClick={ process }>
                {props.n}
            </button>

        </div>
    );
}
export default Button;