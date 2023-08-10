import * as Styled from "./Input.styled.ts";
import React from "react";
import {UseFormRegister, FieldValues } from 'react-hook-form'

interface InputProps {
    name: string,
    id: string,
    placeHolder: string,
    type: React.HTMLInputTypeAttribute,
    register: UseFormRegister<FieldValues>
}
function Input({name, id, placeHolder, type, register} : InputProps) {

    return (
        <Styled.Wrapper>
            <label htmlFor={id}>{name}</label>
            <input id={id} placeholder={placeHolder} type={type} {...register(id)}/>
        </Styled.Wrapper>
    );
}

export default Input;