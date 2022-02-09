import React, { useState } from "react";

import './calculator.css';
import Button from './button';
import ButtonNumber from './buttonNumber';

function Calculator() {

    const [modifier, setModifier] = useState(null);
    const [value, setValue] = useState(0);
    const [valueMod, setValueMod] = useState(0);

    return(
        <div className="wrapper">
            <h1>value: {value} </h1>
            <h1>valueMod: {valueMod} </h1>
            <h1>Mod: {modifier} </h1>
            <div className="row">
                <Button n={'CE'} stateParser={setModifier} />
                <Button n={'-'} stateParser={setModifier} />
                <Button n={'+'} stateParser={setModifier} />
                <Button n={'/'} stateParser={setModifier} />
                <Button n={'x'} stateParser={setModifier} />
            </div>
            <div className="row">
                <ButtonNumber n={1} stateParser={setValue} value={value}/>
                <ButtonNumber n={2} stateParser={setValue} value={value}/>
                <ButtonNumber n={3} stateParser={setValue} value={value}/>
                <ButtonNumber n={4} stateParser={setValue} value={value}/>
                <ButtonNumber n={5} stateParser={setValue} value={value}/>
                <ButtonNumber n={6} stateParser={setValue} value={value}/>
                <ButtonNumber n={7} stateParser={setValue} value={value}/>
                <ButtonNumber n={8} stateParser={setValue} value={value}/>
                <ButtonNumber n={9} stateParser={setValue} value={value}/>
            </div>
            <Button n={"="} stateParser={setValueMod} data={value} valueMod={valueMod} modifier={modifier}/>
        </div>

    );
}

export default Calculator;