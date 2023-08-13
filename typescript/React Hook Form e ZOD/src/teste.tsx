









// type ActionsType = 'CREATE_USER' | 'DELETE_USER' | 'CHANGE_PASSWORD'

// enum ACTIONS{
//     CREATE_USER = 'CREATE_USER' ,
//     DELETE_USER = 'DELETE_USER'
// }

const ACTIONS= {
    CREATE_USER: 'CREATE_USERDAWJKWJDAWJDGAKJWDGAKWJDGAKJDAKJWGAKWDJAD' ,
    DELETE_USER: 'DELETE_USER',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    USER_NAME: 'user name'
} as const



type ActionsType =  typeof ACTIONS[keyof typeof ACTIONS]

interface ActionProps{
    type: ActionsType,
    payload: any
}

interface User{
    name: string,
    age: string
}








// state : como o objeto é moldado
// action: type -> qual é o nome da operação
// action: payload -> quais dados serão manipulados

import React from 'react';

function Teste() {
    const [user, dispacth] = React.useReducer((state: User | null, action: ActionProps)=>{
        if(action.type === 'CREATE_USER'){
            return state
        }
        if(action.type === 'DELETE_USER'){
            return state
        }

        return state
    }, null)

    function createUser(actionType : ActionsType){
        dispacth({
            type: ACTIONS.CREATE_USER,
            payload: {}
        })
    }

    createUser(ACTIONS.CREATE_USER)

    return (
        <div></div>
    );
}

export default Teste;