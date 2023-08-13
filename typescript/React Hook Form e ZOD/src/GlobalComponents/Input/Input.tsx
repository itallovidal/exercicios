import * as Styled from "./Input.styled.ts";
import React from "react";
import {UseFormRegister, FieldValues, FieldErrors} from 'react-hook-form'
import {User} from "../../pages/SignUp/SignUp.tsx";

interface InputProps {
    name: string,
    id: "name" | "age" | "email" | "password",
    placeHolder: string,
    type: React.HTMLInputTypeAttribute,
    register: UseFormRegister<User>,
    error:  FieldErrors<FieldValues>
}
function Input({name, id, placeHolder, type, register, error} : InputProps) {

    return (
        <Styled.Wrapper>
            <label htmlFor={id}>{name}</label>

            <input id={id} placeholder={placeHolder} type={type} {...register(id)}
            />

            {error[id]?.message && <p> { String(error[id]?.message)}</p>}
        </Styled.Wrapper>
    );
}

export default Input;