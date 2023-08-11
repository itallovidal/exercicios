import React from 'react';
import styles from './button.module.css'
function Button({children, styleChosen, ...props}) {

    return (
        <button  {...props} className={`${styles[styleChosen]} ${styles.btnConfig}`}>
            {children}
        </button>
    );
}

export default Button;