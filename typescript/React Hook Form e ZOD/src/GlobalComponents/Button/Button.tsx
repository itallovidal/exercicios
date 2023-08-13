import React from "react";
import * as Styled from './Button.styled.ts'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
}

function Button({children, ...props} : ButtonProps) {
    return (
        <Styled.Button {...props}>
            {children}
        </Styled.Button>
    );
}

export default Button;