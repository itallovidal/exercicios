import * as Styled from './GlobalWrapper.styled.ts'
import {ReactNode} from "react";
function GlobalWrapper({children} : {children: ReactNode}) {
    return (
        <Styled.ExternalWrapper>
            <Styled.InternalWrapper>
                {children}
            </Styled.InternalWrapper>
        </Styled.ExternalWrapper>
    );
}

export default GlobalWrapper;