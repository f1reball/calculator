import React, { createContext, useContext, useEffect, useState } from "react";

import Button from './button';

function Calculator() {

    const [modifier, setModifier] = useState(null);

    return(
        <div>
            <h1> {modifier} </h1>
            <Button value={'-'} stateParser={setModifier} />
            <Button value={'+'} stateParser={setModifier} />
            <Button value={'/'} stateParser={setModifier} />
            <Button value={'x'} stateParser={setModifier} />
        </div>

    );
}

export default Calculator;