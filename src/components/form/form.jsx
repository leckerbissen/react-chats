import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";

export const Form = () => {
    const [value, setValue] = useState('');
    const [message, setMessage] = useState([]);

    const handleClick = () => {
        setMessage([...message, value]);
        setValue(' ');
    }

    const handleValue = (event) => {
        setValue(event.target.value)
    }

    return <>
        <Input change={handleValue} value={value}/>
        <Button click={handleClick}/>
    </>
}