import GlobalWrapper from "../../GlobalComponents/GlobalWrapper/GlobalWrapper.tsx";
import * as Styles from './Profile.styled.ts'
import React from "react";
import {Globalcontext} from "../../contexts/GlobalContextProvider.tsx";
import {useNavigate} from "react-router-dom";
import Button from "../../GlobalComponents/Button/Button.tsx";
function Profile() {
    const {userData, logOff} = React.useContext(Globalcontext)
    const Navigate = useNavigate()

    React.useEffect(()=>{
        if(userData === null){
            Navigate('/')
        }

    }, [])

    console.log(userData)
    return (
        <main>
            <GlobalWrapper>
                <Styles.Wrapper>
                    <h1>Perfil</h1>

                    {
                        userData && (
                            <ul>
                                <li>{userData?.name}</li>
                                <li>{userData?.age}</li>
                                <li>{userData?.email}</li>
                                <li>{userData?.password}</li>
                            </ul>
                        )
                    }

                    <Button onClick={logOff}> Sair </Button>

                </Styles.Wrapper>
            </GlobalWrapper>
        </main>
    );
}

export default Profile;