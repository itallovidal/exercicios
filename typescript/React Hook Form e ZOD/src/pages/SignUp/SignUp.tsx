import GlobalWrapper from "../../GlobalComponents/GlobalWrapper/GlobalWrapper.tsx";
import Input from "../../GlobalComponents/Input/Input.tsx";
import * as Styled from './SignUp.styled.ts'
import Button from "../../GlobalComponents/Button/Button.tsx";
import {useForm} from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import React from "react";
import {Globalcontext} from "../../contexts/GlobalContextProvider.tsx";


const schema = z.object({
    name: z.string()
        .min(3, {message: 'Nome deve ter pelo menos 3 caracteres.'}),
    age: z
        .coerce.number()
        .min(18, {message: 'idade mínima é 18 anos.'})
        .int({message: 'Idade deve ser um número inteiro.'}),
    email: z.string()
        .email({message: 'Por favor, insira um email válido.'}),
    password: z.string()
        .min(6, {message: 'Senha deve ter no mínimo 6 caracteres.'})
}).required({
    name: true,
    age:true,
    email: true,
    password: true
})

export interface User extends z.infer<typeof schema>{}

function SignUp() {
    const {
        register,
        handleSubmit,
        formState : {errors}} = useForm<User>({
        resolver: zodResolver(schema)
    })

    const {createUser} = React.useContext(Globalcontext)

    function submitForm(data: User){
        createUser(data)
    }


    return (
        <main>
            <GlobalWrapper>
                <Styled.Form onSubmit={handleSubmit(submitForm)}>
                    <h1> Bem Vindo! </h1>
                    <Input error={errors}  id={'name'} name={'nome'} placeHolder={'Digite seu Nome'} type={'text'} register={register}/>
                    <Input error={errors}  id={'age'} name={'idade'} placeHolder={'Digite sua idade'} type={'number'} register={register}/>
                    <Input error={errors}  id={'email'} name={'email'} placeHolder={'Digite seu email'} type={'text'} register={register}/>
                    <Input error={errors}  id={'password'} name={'senha'} placeHolder={'Digite uma senha'} type={'password'} register={register}/>

                    <Button type={'submit'}> Registrar!</Button>
                </Styled.Form>
            </GlobalWrapper>
        </main>

    );
}

export default SignUp;