import React from 'react';
import {useNavigate} from "react-router-dom";
import {User} from "../pages/SignUp/SignUp.tsx";



interface GlobalContext{
    userData: User | null,
    createUser: (a: User)=> void,
    logOff: ()=> void
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

        if(action.type === 'DELETE_USER'){
            return null
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

    function logOff(){
        dispatch({
            type: 'DELETE_USER',
            payload: null
        })

        Navigate('/')
    }

    return (
        <Globalcontext.Provider value={{userData, createUser, logOff}}>
            {children}
        </Globalcontext.Provider>
    );
}

export default GlobalContextProvider;