import React from 'react';
import {useNavigate} from "react-router-dom";

interface User{
    name: string,
    age: string,
    email: string,
    password: string
}

interface GlobalContext{
    userData: User | null,
    createUser: (a: User)=> void
}

const ACTIONS = {
    CREATE_USER: 'CREATE_USER',
    DELETE_USER: 'DELETE_USER'
} as const

type ACTIONS_TYPE = typeof ACTIONS[keyof typeof ACTIONS]

interface ActionsProps{
    type: ACTIONS_TYPE,
    payload: any
}


export const Globalcontext = React.createContext({} as GlobalContext)
function GlobalContextProvider({children} : {children: React.ReactNode}) {
    const Navigate = useNavigate()
    const [userData, dispatch] = React.useReducer((state: User | null, action: ActionsProps)=>{
        if(action.type === 'CREATE_USER'){
            return action.payload
        }
        return state
    }, null)

    function createUser(data: User){
        dispatch({
            type: 'CREATE_USER',
            payload: data
        })

        Navigate('/profile')
    }

    return (
        <Globalcontext.Provider value={{userData, createUser}}>
            {children}
        </Globalcontext.Provider>
    );
}

export default GlobalContextProvider;