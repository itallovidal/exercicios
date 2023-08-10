import GlobalWrapper from "../../GlobalComponents/GlobalWrapper/GlobalWrapper.tsx";
import * as Styles from './Profile.styled.ts'
import React from "react";
import {Globalcontext} from "../../contexts/GlobalContextProvider.tsx";
function Profile() {
    const {userData} = React.useContext(Globalcontext)

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

                    { (userData === null) && <p>Sem dados!</p>}

                </Styles.Wrapper>
            </GlobalWrapper>
        </main>
    );
}

export default Profile;