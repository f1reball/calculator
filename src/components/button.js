import React from "react";

import './button.css'

function Button(props) {

    function Enter() {



        if( props.n === '=') {
            props.stateParser("6")
        }
        if(props.modifier === null){
            console.log(props.n);
            props.stateParser(props.n);
        }
        //console.log(props.data);
        //props.stateParser(props.data);
    }

    
    function numberPush() {

    }

    return(
        <div>
            <button className={"test"} onClick={ Enter }>
                {props.n}
            </button>
            
        </div>
    );
}
export default Button;