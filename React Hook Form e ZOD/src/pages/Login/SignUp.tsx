import GlobalWrapper from "../../GlobalComponents/GlobalWrapper/GlobalWrapper.tsx";
import Input from "../../GlobalComponents/Input/Input.tsx";
import * as Styled from './SignUp.styled.ts'
import Button from "../../GlobalComponents/Button/Button.tsx";
import React, {useContext} from "react";
import {Globalcontext} from "../../contexts/GlobalContextProvider.tsx";
import {useForm} from "react-hook-form";




function SignUp() {
    const {register, watch} = useForm()
    console.log(watch('name'))
    console.log(watch('age'))
    console.log(watch('email'))
    console.log(watch('password'))

    const {createUser} = useContext(Globalcontext)
    function handleSubmit(e: React.FormEvent){
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const data = new FormData(form)

        createUser({
            name: data.get('name') as string,
            age: data.get('age') as string,
            email: data.get('email') as string,
            password: data.get('password') as string
        })
    }


    return (
        <main>
            <GlobalWrapper>
                <Styled.Form onSubmit={handleSubmit}>
                    <h1> Bem Vindo ao Registro! </h1>
                    <Input id={'name'} name={'nome'} placeHolder={'Digite seu Nome'} type={'text'} register={register}/>
                    <Input id={'age'} name={'idade'} placeHolder={'Digite sua idade'} type={'number'} register={register}/>
                    <Input id={'email'} name={'email'} placeHolder={'Digite seu email'} type={'text'} register={register}/>
                    <Input id={'password'} name={'senha'} placeHolder={'Digite uma senha'} type={'password'} register={register}/>

                    <Button type={'submit'}> Registrar!</Button>
                </Styled.Form>
            </GlobalWrapper>
        </main>

    );
}

export default SignUp;